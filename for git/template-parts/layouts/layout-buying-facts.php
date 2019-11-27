<?php

$section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');

if( have_rows('buying_facts_items') ):
?>
<section id="buyFacts" class="section section--brand-nine facts">
    <div class="container">
        <h2 class="section__title"><?php echo $section_title ?></h2>
            <ul class="facts__grid">
                <?php
                   while ( have_rows('buying_facts_items') ) : the_row();
                ?>
                <li class="facts__grid-item">
                    <span class="facts__image-wrap">
                        <img src="<?php echo get_sub_field('img')['url'] ?>" alt="<?php echo get_sub_field('img')['alt'] ?>" class="facts-grid__image">
                    </span>
                    <span class="facts__the-fact">
                        <?php the_sub_field('fact'); ?>
                    </span>
                </li>
            <?php
               endwhile;
            ?>
            </ul>
        </div>
    </section>
<?php
endif;
