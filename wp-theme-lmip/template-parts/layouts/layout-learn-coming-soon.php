<?php
    $form_intro_fields = get_sub_field('form_intro');
    $section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');
?>
<section id="comingSoon" class="section coming-soon">
    <div class="container">
        <h2 class="section__title"><?php echo $section_title; ?></h2>
        <div class="row">
            <div class="col-sm-12 col-md-10 col-lg-8">
                <div class="coming-soon__content">
                    <?php echo $form_intro_fields['content'] ?>
                </div>
                <div class="coming-soon__form">
                <?php
                    echo do_shortcode('[contact-form-7 id="445" title="Learn Sign Up"]');
                ?>
                </div>
            </div>
        </div>
    </div>
</section>
