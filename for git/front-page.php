<!-- Front page template -->

<?php get_header();?>

    <div class="video-hero">
        <video src="/wp-content/themes/lmip/video/london-makes-it-possible.mp4" autoplay loop playsinline muted poster="/wp-content/themes/lmip/images/home-video-poster.jpg">
    </div>

    </video>

        <?php
            if (have_rows('home_flexible_layouts')):

                while (have_rows('home_flexible_layouts')) : the_row();
                // Header bar
                if (get_row_layout() == 'home_header_bar') {
                    get_template_part('template-parts/layouts/layout', 'home-header-bar');
                }

                // intro
                if (get_row_layout() == 'home_intro') {
                    get_template_part('template-parts/layouts/layout', 'home-intro');
                }

                // sell/buy/learn layouts
                if (get_row_layout() == 'home_sell_buy_learn_panel') {
                    global $list_type_name, $list_heading_var, $list_class, $page_link, $list_intro;
?>
        <section class="section latest-announcements">
            <div class="container">
                <div class="row">

<?php
                    $list_intro = 'home_buy_intro';
                    $list_type_name = 'home_buy_list_items';
                    $list_heading_var = 'home_buy_list_header';
                    $list_class = 'list-buy';
                    $page_link = 'home_buy_page_link';
                    get_template_part('template-parts/layouts/layout', 'home-sell-buy-learn');
?>

<?php
                    $list_intro = 'home_learn_intro';
                    $list_type_name = 'home_learn_list_items';
                    $list_heading_var = 'home_learn_list_header';
                    $list_class = 'list-learn';
                    $page_link = 'home_learn_page_link';
                    get_template_part('template-parts/layouts/layout', 'home-sell-buy-learn');
                }
?>

<?php
                    $list_intro = 'home_sell_intro';
                    $list_type_name = 'home_sell_list_items';
                    $list_heading_var = 'home_sell_list_header';
                    $list_class = 'list-sell';
                    $page_link = 'home_sell_page_link';
                    get_template_part('template-parts/layouts/layout', 'home-sell-buy-learn');
?>

                </div>
            </div>
        </section>
<?php
                endwhile;
            endif;
        ?>
<?php get_footer();?>
