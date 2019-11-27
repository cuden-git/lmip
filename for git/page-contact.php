<?php /**
* Template Name: Contact
*/ ?>
<?php get_header();?>

<!-- Hero -->
<?php get_template_part('template-parts/content','hero'); ?>

<section class="section">
    <div class="container">
        <h2 class="section__title"><strong>Contact</strong> us</h2>
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
        <?php the_content(); ?>
    <?php endwhile; endif; ?>
    </div>
</section>

<?php get_footer();?>
