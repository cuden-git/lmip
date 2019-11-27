<!-- Common page template -->

<?php get_header();?>
<!-- Hero -->
<?php get_template_part('template-parts/content','hero'); ?>

<section class="section basic-page-section">
    <div class="container">
        <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; endif; ?>
    </div>
</section>

<?php get_footer();?>
