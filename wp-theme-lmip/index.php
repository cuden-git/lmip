<!-- Common page template -->

<?php get_header();?>

<div class="content-area">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
                    <h1><?php single_post_title(); ?></h1>
                    <?php the_content(); ?>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </div>
</div>

<?php get_footer();?>
