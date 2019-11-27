<?php

$section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');
$section_text = (get_sub_field('section_text'));

if( have_rows('buy_markets') ):
?>
<section class="section market-overview" id="marketOverview">
    <div class="container">
        <h2 class="section__title"><?php echo $section_title ?></h2>
        <?php echo $section_text ?>
        <ul class="market-overview__grid">
            <?php
               while ( have_rows('buy_markets') ) : the_row();
                $item_link = get_sub_field('link_url');
            ?>
            <li class="market-overview__grid-item">
                <img src="<?php echo get_sub_field('logo')['url'] ?>" alt="<?php echo get_sub_field('logo')['alt'] ?>" class="market-overview__img">
                <h3 class="market-overview__title"><?php the_sub_field('title') ?></h3>
                <?php the_sub_field('description'); ?>
                <a href="<?php echo $item_link['url'] ?>" title="<?php echo $item_link['title'] ?>" class="market-overview__link" target="_blank"><?php echo $item_link['title'] ?></a>
            </li>
            <?php
               endwhile;
            ?>
        </ul>
   </div>
</section>
<?php
endif;
