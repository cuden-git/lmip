<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php the_title(); ?> | London Makes it Possible</title>
    <?php wp_head();?>
    <?php
        if(get_field('analytics','option')) {
            the_field('analytics','option');
        }
    ?>
</head>
<body <?php body_class();?>>
    <header class="header">
        <!-- Logo -->
        <div class="container" style="position: relative;">
            <a href="/" class="header__logo">
                <img src="/wp-content/themes/lmip/images/london-makes-it-possible.svg" alt="London Makes it Possible">
            </a>
        </div>
        <!-- Logo [END] -->
        <!-- Mobile Toggle -->
        <input type="checkbox" id="nav-toggle">
        <label for="nav-toggle" class="header__nav-toggle">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
        </label>
        <!-- Mobile Toggle -->
        <!-- Mobile Collapse Area -->
        <div class="header__collapse">
            <div class="container">
                <div class="header__menu-wrap">
                    <?php wp_nav_menu (
                        array(
                            'theme_location' => 'top-menu',
                            'menu_class' => 'header__navigation',
                            'fallback_cb'    => false
                        )
                    ); ?>
                    <a href="#" title="Search" class="search-icon<?php if(is_search()){ echo ' active'; } ?>" data-js="ElementCollapse" data-target="site-search">Search</a>
                </div>
            </div>
            <?php get_template_part('template-parts/content', 'search-form'); ?>
        </div>
        <!-- Mobile Collapse Area [END] -->
    </header>
