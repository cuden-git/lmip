<?php /**
* Template Name: Learn
*/ ?>
<?php get_header();?>

<!-- Hero -->
<?php get_template_part('template-parts/content','hero'); ?>

<?php
    if (have_rows('learn_flexible_layouts')):

        while (have_rows('learn_flexible_layouts')) : the_row();
            // Intro
            if (get_row_layout() == 'learn_intro') {
                get_template_part('template-parts/layouts/layout', 'intro');
            }
            // Comming soon
            if (get_row_layout() == 'coming_soon') {
                get_template_part('template-parts/layouts/layout', 'learn-coming-soon');
            }
            // Learn Help
            if (get_row_layout() == 'help_answering') {
                get_template_part('template-parts/layouts/layout', 'learn-help');
            }
        endwhile;
    endif;
?>

<?php get_footer();?>
