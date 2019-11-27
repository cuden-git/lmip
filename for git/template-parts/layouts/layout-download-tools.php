<?php

$download_tools = get_sub_field('tools_posts');
$section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');

if( $download_tools ) {
    $loop_count = 0;
?>
<section id="downloadTools" class="section section--brand-four section--download-tools" data-js="DownloadTools">
    <div class="container">
        <h2 class="section__title"><?php echo $section_title; ?></h2>
    <!-- top level tools categories list -->
        <ul class="tools-main-nav">
<?php
    foreach( $download_tools as $tool ) {
        $toplevel_tool_title = (get_field('category_short_label',$tool->ID))? get_field('category_short_label',$tool->ID) : $tool->post_title;

        if($loop_count == 0) {
            $first_post = $tool;
            $first_post_tool_title = $toplevel_tool_title;
            $first_post_tools = get_field('category_items',$first_post->ID);
            $item_class = ' class="active"';
        }else {
            $item_class = '';
        }
?>
            <li<?php echo $item_class ?> data-id="<?php echo $tool->ID ?>"><?php echo $toplevel_tool_title ?></li>
<?php
        ++$loop_count;
    } // end foreach
 ?>
        </ul>
    <!-- end top level tools categories list -->
        <div class="tools">
<?php

if( have_rows('category_items',$first_post->ID) ):
    $loop_count = 0;
    $first_content = [];
    $first_content['titles'] = []
?>

<?php
   while ( have_rows('category_items',$first_post->ID) ) : the_row();

        if($loop_count == 0) {
            $first_content['item_info'] = get_sub_field('item_info');
            $first_content['file'] = get_sub_field('item_file');
            $first_content['file_type'] = 'type--'.get_file_type($first_content['file']['url']);
            $first_content['file_type_class'] = 'type--'.$first_content['file_type'];
            $first_content['img'] = (get_sub_field('item_file_img'))? get_sub_field('item_file_img') : get_fallback_img_type($path);
        }

        $first_content['titles'][] = get_sub_field('item_title');
?>

<?php
        ++$loop_count;
    endwhile;
?>

            <div class="row">

                <div class="col-sm-12 col-md-8">
                    <h6 class="tool-title tools__title"><?php echo $first_post_tool_title ?></h6>
                    <div class="row">

                        <div class="col-sm-12 col-md-5 tool-content tools__content">
                            <?php echo $first_content['item_info']; ?>
                        </div>

                        <div class="col-sm-12 col-md-7 tools__list">
                            <ul class="tool-subnav tools__subnav">
                            <?php
                                $loop_count = 0;

                                foreach($first_content['titles'] as $title) {
                                    $item_class = ($loop_count == 0)? ' class="active"' : '' ;
                                    ?>
                                    <li<?php echo $item_class ?>><?php echo $title ?></li>
                                    <?php
                                    ++$loop_count;
                                }
                            ?>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="col-sm-12 col-md-4">
                    <img src="<?php echo $first_content['img']['url']; ?>" class="tool-img" alt="<img src="<?php echo $first_content['img']['alt']; ?>">
                    <a href="<?php echo $first_content['file']['url']; ?>" class="tool-download tools__download button button--reversed button--download <?php echo $first_content['file_type_class'] ?>" target="_blank" title="download" data-type-class="<?php echo $first_content['file_type_class'] ?>">Download</a>
                </div>

            </div>
        </div>
<?php
endif;
}// end if
?>
    </div>
</section>
