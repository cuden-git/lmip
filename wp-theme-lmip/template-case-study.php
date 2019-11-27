<!-- Case Study page template -->

<?php get_header();

/*
 * Template Name: Case Study
 * Template Post Type: case_study
 */

?>

<div class="page-intro">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <h1>Case Study</h1>
            </div>
        </div>
    </div>
</div>

<div class="content-area">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">

                <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

                    <h1><?php single_post_title(); ?></h1>

                    <?php if ( get_field( 'video_url' ) ): ?>

                        <?php
                            $imageId = get_field('case_study_image');
                            $imageUrl = wp_get_attachment_image_url($imageId, 'thumbnail');
                        ?>

                        <video id="case-study-video" class="video-js vjs-default-skin vjs-big-play-centered vjs-show-big-play-button-on-pause" preload="auto" playsinline controls poster="<?= $imageUrl ?>"></video>
                        <link href="https://vjs.zencdn.net/7.0.3/video-js.css" rel="stylesheet">
                        <script src="https://vjs.zencdn.net/7.0.3/video.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.5.0/Youtube.min.js"></script>
                        <script type="text/javascript">
                            const player = videojs('case-study-video', {}, () => {
                                player.src({ type: 'video/youtube', src: '<?php the_field('video_url'); ?>' })
                            })
                        </script>

                    <?php else: ?>

                        <?php
                            $image = get_field('case_study_image');
                            $size = 'thumbnail';
                            if( $image ) {
                            	echo wp_get_attachment_image( $image, $size );
                            }
                        ?>

                    <?php endif; // end of if field_name logic ?>

                    <?php the_field('case_study_text'); ?>

                <?php endwhile; endif; ?>

            </div>
        </div>
    </div>
</div>

<?php get_footer();?>
