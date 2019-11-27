<?php

global $list_type_name,$list_heading_var,$list_class,$page_link,$list_intro;

$list_header = get_sub_field($list_heading_var);
$list_intro = get_sub_field($list_intro);
$list_page_link = get_sub_field($page_link);

if (have_rows($list_type_name)):
    $loop_count = 0;
?>

    <div class="col-md-4 <?php echo $list_class ?>">

        <h2 class="list__title"><?php echo $list_header ?></h2>
        <p class="latest__intro"><?php echo $list_intro; ?></p>

        <ul class="latest">
            <?php
                while (have_rows($list_type_name)) : the_row();
                    $item_type = get_sub_field('home_list_item_type');
                    $link_attr = '';
                    //article fields
                    switch ($item_type['value']) {
                        case 'article':
                            $article = get_sub_field('home_item_article');
                            $item_title = $article->post_title;
                            $item_url = get_permalink($article->ID);
                            $article_is_video = (get_field('article_hero_selection', $article->ID) == 'img')? 0 : 1;
                            $item_class = ($article_is_video)? 'article-video' : 'article-img';
                            $item_img = ($loop_count == 0)? get_field('article_hero_img', $article->ID) : null;
                            break;
                        case 'case_study':
                            $item_data = get_sub_field('home_item_case_study');
                            $case_study = get_post(get_sub_field('home_item_case_study')['case_study']);
                            $item_title = (get_field('case_study_menu_label',$case_study->ID))? get_field('case_study_menu_label',$case_study->ID) : $case_study->post_title;
                            $item_url = $item_data['page_link'].'?case-study-id='.$case_study->ID.$item_data['page_section_anchor'];//get_permalink($case_study->ID);
                            $case_study_is_video = (get_field('article_hero_selection', $case_study->ID) == 'img')? 0 : 1;
                            $item_class = 'latest-case-study';
                            $item_img = ($loop_count == 0)? get_field('case_study_image', $case_study->ID) : null;
                            break;
                        case 'download':
                            $item_data = get_sub_field('home_item_download');
                            $item_title = $item_data['media_item_label'];
                            $item_url = $item_data['media_item_file']['url'];//$media_object->guid;
                            $item_filetype = wp_check_filetype($item_url);
                            $item_class = 'download '.$item_filetype['ext'];
                            $item_img = ($loop_count == 0)? get_sub_field('media_item_img') : null;
                            $link_attr = 'target="_blank"';
                            break;
                        case 'page_link':
                            $item_data = get_sub_field('home_item_page_section');
                            $item_title = $item_data['page_section_title'];
                            $item_url = $item_data['page_link'].$item_data['page_section_anchor'];
                            $item_class = (get_sub_field('home_item_class'))? get_sub_field('home_item_class').' info' : 'info';
                            $item_img = ($loop_count == 0)? $item_data['featured_section_img'] : null;
                            break;
                    }
            ?>

            <li class="<?php echo $item_class ?>">
                <a href="<?php echo $item_url ?>"
                    <?php echo $link_attr ?>
                        title="<?php echo $item_title; ?>">
                    <?php
                        if ($item_img != null) {
                    ?>
                        <span class="latest__image-wrap"><img src="<?php echo $item_img['sizes']['imgThumb']  ?>" alt="<?php $item_img['alt'] ?>"></span>
                    <?php
                        }
                    ?>
                    <span class="latest__inset">
                        <h3 class="latest__title"><?php echo $item_title; ?></h3>
                    </span>
                </a>
            </li>

            <?php
                ++$loop_count;
            endwhile;
            ?>

        </ul>

        <a href="<?php echo $list_page_link['url'] ?>" title="<?php echo $list_page_link['title'] ?>" class="latest__all-link">View all content</a>

    </div>
<?php
endif;
