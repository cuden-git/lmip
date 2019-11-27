<section id="homeIntro" class="section section--brand-twelve home-intro">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <?php
                    if (get_sub_field('home_intro_title')) {
                ?>
                    <h2><?php the_sub_field('home_intro_title') ?></h2>
                <?php
                    }
                    if (get_sub_field('home_intro_content')) {
                ?>
                    <div><?php the_sub_field('home_intro_content') ?></div>
                <?php
                    }
                ?>
            </div>
        </div>
    </div>
</section>
