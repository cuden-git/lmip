<?php
    $intro_title = strip_tags(get_sub_field('sell_intro')['section_title'],'<strong><b>');
    $intro_content = get_sub_field('sell_intro')['intro_content'];
    $intro_class = get_sub_field('sell_intro')['intro_class'];
?>
<section class="section <?php echo $intro_class ?>">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <h2 class="section__title"><?php echo $intro_title ?></h2>
                <?php echo $intro_content ?>
            </div>
        </div>
    </div>
</section>
