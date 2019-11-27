<?php

// Add Stylesheets
function load_stylesheets()
{
    global $post;

    if (get_field('article_video_url', $post->ID)) {
        wp_register_style('video-js-styles', 'https://vjs.zencdn.net/7.0.3/video-js.css', array(), false, 'all');
        wp_enqueue_style('video-js-styles');
    }

    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), false, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('slick', get_template_directory_uri() . '/css/slick.css', array(), false, 'all');
    wp_enqueue_style('slick');

    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), false, 'all');
    wp_enqueue_style('style');
}

add_action('wp_enqueue_scripts', 'load_stylesheets', 1000);


// Add Javascripts
function load_javascripts()
{
    global $post;

    $script_params = array(
        'siteURL' => site_url()
    );

    if (get_field('article_video_url', $post->ID)) {
        wp_register_script('video-js', 'https://vjs.zencdn.net/7.0.3/video.js', '', 1, true);
        wp_enqueue_script('video-js');
        wp_register_script('video-js-youTube', 'https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.5.0/Youtube.min.js', '', 1, true);
        wp_enqueue_script('video-js-youTube');
        $script_params['articleVideoURL'] = get_field('article_video_url', $post->ID);
    }
    wp_register_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', '', 1, true);
    wp_enqueue_script('bootstrap');

    wp_register_script('slick', get_template_directory_uri() . '/js/slick.min.js', '', 1, true);
    wp_enqueue_script('slick');

    wp_register_script('matchHeight', get_template_directory_uri() . '/js/jquery.matchHeight-min.js', '', 1, true);
    wp_enqueue_script('matchHeight');
    wp_register_script('custom', get_template_directory_uri() . '/js/custom.js', array('main','jquery'), 1, true);
    wp_enqueue_script('custom');
    wp_register_script('main', get_template_directory_uri() . '/js/main.js', 'jquery', 1, true);
    wp_enqueue_script('main');
    wp_localize_script('main', 'localizedData', $script_params);
}

add_action('wp_enqueue_scripts', 'load_javascripts');


// Add post thumbnails
add_theme_support('post-thumbnails');

// Set up image sizes w x h x hard-crop
add_image_size('imgLarge', 1110, 625, true);
add_image_size('imgThumb', 515, 290, true);

// Add menus to theme
add_theme_support('menus');

// Specify menu location
register_nav_menus(
    array(
        'top-menu' => __('Top Menu', 'theme'),
        'footer-menu-one' => __('Footer Menu One', 'theme'),
        'footer-menu-two' => __('Footer Menu Two', 'theme'),
    )
);

// Add tag support to pages
// function tags_support_all()
// {
//     register_taxonomy_for_object_type('post_tag', 'page');
// }

// Ensure all tags are included in queries
// function tags_support_query($wp_query)
// {
//     if ($wp_query->get('tag')) {
//         $wp_query->set('post_type', 'any');
//     }
// }

// Tag hooks
//add_action('init', 'tags_support_all');
//add_action('pre_get_posts', 'tags_support_query');


// Adds ability to duplicate posts
function rd_duplicate_post_as_draft()
{
    global $wpdb;
    if (! (isset($_GET['post']) || isset($_POST['post'])  || (isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action']))) {
        wp_die('No post to duplicate has been supplied!');
    }

    if (!isset($_GET['duplicate_nonce']) || !wp_verify_nonce($_GET['duplicate_nonce'], basename(__FILE__))) {
        return;
    }

    $post_id = (isset($_GET['post']) ? absint($_GET['post']) : absint($_POST['post']));

    $post = get_post($post_id);

    $current_user = wp_get_current_user();
    $new_post_author = $current_user->ID;

    if (isset($post) && $post != null) {
        $args = array(
            'comment_status' => $post->comment_status,
            'ping_status'    => $post->ping_status,
            'post_author'    => $new_post_author,
            'post_content'   => $post->post_content,
            'post_excerpt'   => $post->post_excerpt,
            'post_name'      => $post->post_name,
            'post_parent'    => $post->post_parent,
            'post_password'  => $post->post_password,
            'post_status'    => 'draft',
            'post_title'     => $post->post_title,
            'post_type'      => $post->post_type,
            'to_ping'        => $post->to_ping,
            'menu_order'     => $post->menu_order
        );

        $new_post_id = wp_insert_post($args);

        $taxonomies = get_object_taxonomies($post->post_type);
        foreach ($taxonomies as $taxonomy) {
            $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
            wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
        }

        $post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
        if (count($post_meta_infos)!=0) {
            $sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
            foreach ($post_meta_infos as $meta_info) {
                $meta_key = $meta_info->meta_key;
                if ($meta_key == '_wp_old_slug') {
                    continue;
                }
                $meta_value = addslashes($meta_info->meta_value);
                $sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";
            }
            $sql_query.= implode(" UNION ALL ", $sql_query_sel);
            $wpdb->query($sql_query);
        }

        wp_redirect(admin_url('post.php?action=edit&post=' . $new_post_id));
        exit;
    } else {
        wp_die('Post creation failed, could not find original post: ' . $post_id);
    }
}
add_action('admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft');

function rd_duplicate_post_link($actions, $post)
{
    if (current_user_can('edit_posts')) {
        $actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce') . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
    }
    return $actions;
}

add_filter('post_row_actions', 'rd_duplicate_post_link', 10, 2);

// Adds ability to duplicate posts [END]


// Adds Categories to Pages
// function myplugin_settings()
// {
//     register_taxonomy_for_object_type('post_tag', 'page');
//     register_taxonomy_for_object_type('category', 'page');
// }
// add_action('init', 'myplugin_settings');

// Remove Punch Fonts from Admin Sidebar
if (is_admin()) {
    $GLOBALS['admin_page_hooks']['themepunch-google-fonts'] = true;
}

// Remove Menu items from Admin Menu
function custom_menu_page_removing()
{
    remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'custom_menu_page_removing');


// Custom Admin Menu Order
function wpse_custom_menu_order($menu_ord)
{
    if (!$menu_ord) {
        return true;
    }

    return array(
        'index.php', // Dashboard
        'separator1', // First separator
        'edit.php', // Posts
        'edit.php?post_type=page', // Pages
        'edit.php?post_type=contact_details',
        'upload.php', // Media
        'separator2', // Second separator
        'themes.php', // Appearance
        'plugins.php', // Plugins
        'users.php', // Users
        'options-general.php', // Settings
        'separator-last', // Last separator
    );
}
add_filter('custom_menu_order', 'wpse_custom_menu_order', 10, 1);
add_filter('menu_order', 'wpse_custom_menu_order', 10, 1);


// Replace News Icon in Admin Menu
function replace_admin_menu_icons_css()
{
    ?>
    <style>
        .dashicons-admin-post:before {
            content: "\f495";
        }
    </style>
    <?php
}
add_action('admin_head', 'replace_admin_menu_icons_css');

// Contact Form 7 - Change empty text in select menu
function my_wpcf7_form_elements($html)
{
    $text = 'Select';
    $html = str_replace('---', '' . $text . '', $html);
    return $html;
}
add_filter('wpcf7_form_elements', 'my_wpcf7_form_elements');


// Shortcode to output latest 3 posts in WP Bakery page builder
function show_three_posts($atts)
{
    $args = array( 'numberposts' => '3' );
    $recent_posts = wp_get_recent_posts($args);
    echo '<ul class="news-post-grid">';
    foreach ($recent_posts as $recent) {
        echo '<li class="news-post-grid__item">' . get_the_post_thumbnail($recent["ID"], 'full') . '<div class="news-post-grid__inset"> <h3>' . $recent["post_title"] . '</h3>' . $recent["post_content"] . '</div>' . '</li>';
    }
    echo '</ul>';
    wp_reset_query();
}
add_shortcode('wpb_show_three_posts', 'show_three_posts');





// Output on page the available data from the post
// function my_post_meta( $content ) {
//     $my_meta = get_post_meta( get_the_ID() );
//     $my_meta_data = '<pre>' . print_r( $my_meta, true ) . '</pre>';
//     return $content . $my_meta_data;
// }
//
// if( !is_admin() ) {
//     add_filter( 'the_content', 'my_post_meta' );
// }

//load scrollTo anchors into admin select fields.
function acf_load_anchors( $field ) {

    // reset choices
    $field['choices'] = array();


    // get the textarea value from options page without any formatting
    $choices = get_field('page_section_anchors', 'option', false);


    // explode the value so that each line is a new array piece
    $choices = explode("\n", $choices);


    // remove any unwanted white space
    $choices = array_map('trim', $choices);


    // loop through array and add to field 'choices'
    if( is_array($choices) ) {

        foreach( $choices as $choice ) {

            $field['choices'][ $choice ] = $choice;

        }

    }


    // return the field
    return $field;

}

add_filter('acf/load_field/name=page_section_anchor', 'acf_load_anchors');

add_theme_support('post-formats', array( 'aside', 'gallery', 'video' ));

// Add SVG support
function media_mime_types($mime_types) {
    $mime_types['svg'] = 'image/svg+xml';
    $mime_types['zip'] = 'application/zip';
    $mime_types['gz'] = 'application/x-gzip';
    return $mime_types;
}
add_filter('upload_mimes', 'media_mime_types');


add_filter('get_the_archive_title', function ($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_author()) {
        $title = get_the_author();
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    } elseif (is_tax()) {
        $title = single_term_title('', false);
    }
    return $title;
});

// add options page
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page('Site Options');
}

function get_file_type($path) {
    $file_data = wp_check_filetype( $path );

    if($file_data['type'] == '') {
        return 'generic';
    }else {
        return $file_data['ext'];
    }
}

function get_fallback_img_type($path) {

    $file_data = wp_check_filetype( $path );
    $file_name = 'Thumbnail_Generic_File.png';

    switch ($file_data['type']) {
        case 'mp4':
            $file_name = 'Thumbnail_MP4.png';
            break;
        case 'jpg':
            $file_name = 'Thumbnail_JPG.png';
            break;
        case 'pdf':
            $file_name = 'Thumbnail_PDF.png';
            break;
        case 'png':
            $file_name = 'Thumbnail_PNG.png';
            break;
        case 'indd':
            $file_name = 'Thumbnail_INDD.png';
            break;
        case 'zip':
            $file_name = 'Thumbnail_ZIP.png';
            break;
    }

    return get_template_directory_uri().'/images/'.$file_name;
}
/* ##########
Custom Post types
########## */


function create_cpts()
{
    //Case studies
    register_post_type(
        'case-studies',
        array(
            'labels' => array(
                'name' => __('Case Studies'),
                'singular_name' => __('Case Study')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'case-studies'),
            'show_in_rest' => true,
            'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'custom-fields', )
        )
    );
    register_taxonomy(
        'case-studies-category',
        'case-studies',
        array(
            'label' => __('Categories'),
            'rewrite' => array( 'slug' => 'case-studies-category' ),
            'hierarchical' => true,
        )
    );

    //Download tools
    register_post_type(
        'download-tools',
        array(
            'labels' => array(
                'name' => __('Download Tools'),
                'singular_name' => __('Download Tool')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'download-tools'),
            'supports' => array('title')
        )
    );
    register_taxonomy(
    'download-tools-category',
    'download-tools',
    array(
        'label' => __('Categories'),
        'rewrite' => array( 'slug' => 'download-tools-category' ),
        'hierarchical' => true,
    )
);
}

add_action('init', 'create_cpts');


function sb_add_taxes_to_api() {
    $taxonomies = get_taxonomies( '', 'objects' );

    foreach( $taxonomies as $taxonomy ) {
        $taxonomy->show_in_rest = true;
    }
}
add_action( 'init', 'sb_add_taxes_to_api', 30 );


function change_post_menu_label()
{
    global $menu;
    global $submenu;
    $menu[5][0] = 'Articles';
    $submenu['edit.php'][5][0] = 'Articles';
    $submenu['edit.php'][10][0] = 'Add Articles';
    echo '';
}
function change_post_object_label()
{
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'Articles';
    $labels->singular_name = 'Article';
    $labels->add_new = 'Add Article';
    $labels->add_new_item = 'Add Article';
    $labels->edit_item = 'Edit Article';
    $labels->new_item = 'Article';
    $labels->view_item = 'View Article';
    $labels->search_items = 'Search Articles';
    $labels->not_found = 'No Articles found';
    $labels->not_found_in_trash = 'No Articles found in Trash';
}
add_action('init', 'change_post_object_label');
add_action('admin_menu', 'change_post_menu_label');

/* ##########
REST endpoints
########## */
function get_more_posts ( $params ){
    $args = array(
        'post_type' => 'post',
        'posts_per_page'  => $params['perpage'],
        'offset' => $params['offset']
    );
    $args_query = array(
        'post_type' => 'post'
    );
    if(isset($params['tag'])) {
        $args['tag'] = $params['tag'];
        $args_query['tag'] = $params['tag'];
    }

    $posts = get_posts($args);

    $posts_data = [];

    if( empty( $posts ) ){
        return null;
    }
    $posts_data['total'] = wp_count_posts();

    for($i = 0; $i < count($posts); ++$i) {
        $posts_data['articles'][$i]['id'] = $posts[$i]->ID;
        $posts_data['articles'][$i]['title'] = $posts[$i]->post_title;
        $posts_data['articles'][$i]['link'] = get_permalink($posts[$i]->ID);
        $posts_data['articles'][$i]['img'] = get_field('article_hero_img', $posts[$i]->ID);
        $posts_data['articles'][$i]['type'] = get_field('article_hero_selection', $posts[$i]->ID);
        $posts_data['articles'][$i]['class'] = 'article-'.$posts_data[$i]['type'];
        $posts_data['articles'][$i]['date'] = date( 'dS F Y', strtotime( $posts[$i]->post_date ) );
        $posts_data['articles'][$i]['tags'] = strip_tags(get_the_tag_list('',', ','',$posts[$i]->ID));
    }

    $query = new WP_Query( $args_query );
    $total = $query->found_posts;
    $posts_data['no_more'] = ($total > ($params['perpage'] + $params['offset']))? false : true ;

     return $posts_data;
}

add_action( 'rest_api_init', function () {

     register_rest_route( 'load-more/v1', '/posts/(?P<perpage>\d+)/(?P<offset>\d+)(?:/(?P<tag>.+))?',array(

         'methods'  => 'GET',
         'callback' => 'get_more_posts'

     ) );

} );

function get_tools ( $params ){

    $tool_id = $params['id'];
    $tool = get_post( $tool_id );
    $tool_data = [];

    if( empty( $tool ) ){
        return null;
    }

    $tool_data['short_title'] = get_field('category_short_label',$tool_id);
    $tool_data['cat_items'] = get_field('category_items',$tool_id);
    $tool_data['file_types'] = [];

    for($i = 0; $i < count($tool_data['cat_items']); $i++) {
        $tool_data['file_types'][$i] = get_file_type(stripslashes($tool_data['cat_items'][$i]['item_file']['url']));

        if(empty($tool_data['cat_items'][$i]['item_file_img'])) {
            $tool_data['cat_items'][$i]['item_file_img']['url'] = get_fallback_img_type($tool_data['cat_items'][$i]['item_file']['url']);
            $tool_data['cat_items'][$i]['item_file_img']['alt'] = '';
        }
    }

    return $tool_data;
}

add_action( 'rest_api_init', function () {

     register_rest_route( 'load-more/v1', '/tools/(?P<id>\d+)',array(

         'methods'  => 'GET',
         'callback' => 'get_tools'

     ) );

} );

function get_case_study ( $params ){

    $case_study = get_post( $params['id'] );
    $case_study_data = [];

    if( empty( $case_study ) ){
        return null;
    }

    $case_study_data['title'] = $case_study->post_title;
    $case_study_data['content'] = wpautop($case_study->post_content);
    $case_study_data['img'] = get_field('case_study_image',$case_study->ID);
    $case_study_data['bg_colour'] = get_field('case_study_bg_colour',$case_study->ID);

    return $case_study_data;
}

// Register the rest route here.

add_action( 'rest_api_init', function () {

     register_rest_route( 'load-more/v1', '/case-studies/(?P<id>\d+)',array(

         'methods'  => 'GET',
         'callback' => 'get_case_study'

     ) );

} );
