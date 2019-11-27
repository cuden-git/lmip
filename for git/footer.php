<footer class="footer">
    <div class="container">
        <div class="row">

            <div class="col-sm-3">
                <img src="/wp-content/themes/lmip/images/london-makes-it-possible-billboard-logo.jpg" alt="London Makes It Possible" class="footer__logo">
            </div>

            <div class="col-sm-9">

                <div class="row">
                    <div class="col-md-12 col-lg-5 col-xl-4">
                        <div class="footer__email">
                            <h4>Email</h4>
                            <a href="mailto:info@londonmakesitpossible.com" class="footer__email-link">info@londonmakesitpossible.com</a>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 col-xl-5">
                        <?php wp_nav_menu (
                            array(
                                'theme_location' => 'footer-menu-one',
                                'menu_class' => 'footer__navigation footer__navigation--one'
                            )
                        ); ?>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <?php wp_nav_menu (
                            array(
                                'theme_location' => 'footer-menu-two',
                                'menu_class' => 'footer__navigation'
                            )
                        ); ?>
                    </div>

                    <div class="col-sm-12">
                        <ul class="footer__social">
                            <li class="footer__linkedin"><a href="<?php echo get_field('linkedin','option'); ?>" target="_blank">Linkedin</a></li>
                            <li class="footer__youtube"><a href="<?php echo get_field('youtube','option'); ?>" target="_blank">YouTube</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="footer_banner">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p>&copy; <?php echo date('Y'); ?> London Market Group. <span>All rights reserved</span></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer();?>

</body>
</html>
