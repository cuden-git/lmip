<?php 
//if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="container">
<?php
    if (have_rows('home_flexible_layouts')):

        while (have_rows('home_flexible_layouts')) : the_row();

        if (get_row_layout() == 'home_header_bar') {
            get_template_part('template-parts/layouts/layout', 'home-header-bar');
        }
        // intro
        if (get_row_layout() == 'home_intro') {
            get_template_part('template-parts/layouts/layout', 'home-intro');
        }

        // sell/buy/learn layouts
        if (get_row_layout() == 'home_sell_buy_learn_panel') {
            get_template_part('template-parts/layouts/layout', 'home-sell-buy-learn');
        }

        endwhile;
    endif;
?>
    </div>

//endwhile; endif;
