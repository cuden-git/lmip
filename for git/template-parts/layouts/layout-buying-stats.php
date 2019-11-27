<?php

if( have_rows('buy_stats_items') ):
?>
<section id="buyStats" class="section stats">
    <div class="container">
        <ul class="stats__grid">
<?php
   while ( have_rows('buy_stats_items') ) : the_row();
?>
            <li class="stats__grid-item">
                <span class="stats__perc"><?php the_sub_field('percentage') ?></span>
                <span class="stats__title"><?php the_sub_field('title') ?></span>
                <span class="stats__content"><?php the_sub_field('content') ?></span>
            </li>
<?php
   endwhile;
?>
        </ul>
        <p class="stats__disclaimer"><?php the_sub_field('buy_stats_disclaimer') ?></p>
    </div>
</section>
<?php
endif;
