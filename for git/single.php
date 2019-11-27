<?php
    $taxonomy = get_post_taxonomies()[0];
?>
<?php get_header();?>

<section class="section article-post">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="article-post__pager">
                    <?php previous_post_link('%link','Prev',TRUE,'',$taxonomy).' / '.next_post_link('%link','Next',TRUE,'',$taxonomy); ?>
                </div>
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <h1><?php the_title(); ?></h1>
                    <?php if (get_field('article_video_url')) { print_r(get_field('article_video_url')) ?>
                        <div class="video-content">
                            <video id="case-study-video" class="vjs-16-9 video-js vjs-default-skin vjs-big-play-centered vjs-show-big-play-button-on-pause" preload="auto" playsinline controls poster="<?= $imageUrl ?>"></video>
                        </div>
                    <?php } else {
                        $hero_img = get_field('article_hero_img'); ?>
                        <img src="<?php echo $hero_img['url'] ?>" alt="<?php echo $hero_img['alt'] ?>">
                    <?php } ?>
            </div>
            <div class="col-sm-8">
                <div class="article-post__content">
                    <?php the_content(); ?>
                    <?php endwhile; endif; ?>
                    <?php echo sharethis_inline_buttons(); ?>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="article-post__pager">
                    <?php previous_post_link('%link','Prev',TRUE,'',$taxonomy).' / '.next_post_link('%link','Next',TRUE,'',$taxonomy); ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php get_footer();?>
