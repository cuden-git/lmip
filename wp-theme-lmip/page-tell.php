<?php /**
* Template Name: Tell
*/ ?>
<?php get_header();?>

<!-- Hero -->
<?php get_template_part('template-parts/content','hero'); ?>
<?php
    if (have_rows('sell_flexible_layouts')):

        while (have_rows('sell_flexible_layouts')) : the_row();
          // Intro
          if (get_row_layout() == 'sell_intro_block') {
            get_template_part('template-parts/layouts/layout', 'intro');
          }
          // Case Studies
          if (get_row_layout() == 'case_studies_section') {
            global $cat_name;
            $cat_name = 'sell';
            get_template_part('template-parts/layouts/layout', 'case-studies');
          }
          // Download tools
          if (get_row_layout() == 'sell_download_section') {
            get_template_part('template-parts/layouts/layout', 'download-tools'); 
          }
        endwhile;
    endif;
?>

<?php get_footer();?>
