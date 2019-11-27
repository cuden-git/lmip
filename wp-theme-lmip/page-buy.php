<?php /**
* Template Name: Buy
*/ ?>
<?php get_header();?>

<!-- Hero -->
<?php get_template_part('template-parts/content','hero'); ?>

<?php
    if (have_rows('buy_flexible_layouts')):

        while (have_rows('buy_flexible_layouts')) : the_row();
            // Intro
            if (get_row_layout() == 'buy_intro_block') {
                get_template_part('template-parts/layouts/layout', 'intro');
            }
            // Buying Facts
            if (get_row_layout() == 'buying_facts') {
                get_template_part('template-parts/layouts/layout', 'buying-facts');
            }
            // Buying Stats
            if (get_row_layout() == 'buy_stats') {
                get_template_part('template-parts/layouts/layout', 'buying-stats');
            }
            // Buy Articles
            if (get_row_layout() == 'buy_articles') {
                get_template_part('template-parts/layouts/layout', 'articles');
            }
            // Buying FAQs
            if (get_row_layout() == 'buying_faqs_layout') {
                get_template_part('template-parts/layouts/layout', 'buying-faqs');
            }
            // Case Studies
            if (get_row_layout() == 'buy_case_studies') {
                global $cat_name;
                $cat_name = 'buy';
                get_template_part('template-parts/layouts/layout', 'case-studies');
            }
            // Markets Overview
            if (get_row_layout() == 'buy_market_overview') {
                get_template_part('template-parts/layouts/layout', 'markets-overview');
            }

        endwhile;
    endif;
?>

<?php get_footer();?>
