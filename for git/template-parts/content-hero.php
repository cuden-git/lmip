<?php
if (get_field('hero')['hero_img']) {
    $hero_img = get_field('hero')['hero_img'];
    $hero_title = get_field('hero')['hero_title'];
    $hero_title_img = get_field('hero')['hero_img_title']; ?>
    <section style="background-image: url('<?php echo $hero_img['url'] ?>')" class="img-hero">
        <div class="container">
    <?php
        if ($hero_title_img || $hero_title) {
    ?>
        <h1>
    <?php
        if ($hero_title_img) {
    ?>
        <img src="<?php echo $hero_title_img['url'] ?>" alt="<?php echo $hero_title_img['alt'] ?>">
    <?php
        }
    ?>
    <?php
        if ($hero_title) {
            echo $hero_title;
        }
    ?>
        </h1>
    <?php
        }
    ?>
        </div>
    </section>
    <?php
        }
    ?>
