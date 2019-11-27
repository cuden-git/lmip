<?php
    $articles_per_page = 6;
    $articles = get_posts(
        array(
                'post_type' => 'post',
                'posts_per_page' => $articles_per_page
            )
        );
    $article_tags = get_tags(array('get'=>'all'));
    $section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');
    //get_posts(array( 'posts_per_page' => -1, 'tag' => 'case-study-tag-one' ));
    $articles_count = wp_count_posts();
    // echo '<h1>articles_count = '.$articles_count.'</h1>';
?>
<section id="articles" class="section articles">
    <div class="container">
        <div class="row">
            <div class="col-sm-9">
                <h2 class="section__title"><?php echo $section_title ?></h2>
            </div>
        </div>

    <div id="article-list" class="row articles__grid">

        <?php
        foreach($articles as $article) {
            $article_img = get_field('article_hero_img',$article->ID);
            $article_type = get_field('article_hero_selection',$article->ID);
            $article_type_class = 'article-'.$article_type;
            $article_date = date( 'dS F Y', strtotime( $article->post_date ) );
            $article_tags = strip_tags(get_the_tag_list('',' , ','',$article->ID));
            $load_btn_class = ($articles_count->publish > $articles_per_page)? '' : ' d-none' ;
        ?>

        <div class="articles__grid-item <?php echo $article_type_class ?>">
            <a href="<?php echo get_permalink($article->ID) ?>" class="articles__link">
                <span class="articles__image">
                    <img src="<?php echo $article_img['sizes']['imgThumb'] ?>" alt="<?php echo $article_img['alt'] ?>">
                </span>
                <span class="articles__inset">
                    <h6 class="articles__title"><?php echo $article->post_title ?></h6>
                    <span class="articles__date"><?php echo $article_date; ?></span>
                </span>
                <p class="article-tags articles__tags"><?php echo $article_tags; ?></p>
            </a>
        </div>

        <?php
            }
        ?>

    </div>

    <?php
       // if($articles_count->publish > $articles_per_page) {
    ?>
    <div class="row">
        <div class="col load-more<?php echo $load_btn_class ?>">
            <button title="Load more" type="button"
            data-js="LoadMoreArticles"
            data-target="article-list"
            data-per-page="<?php echo $articles_per_page ?>"
            data-offset="<?php echo $articles_per_page ?>"
            data-total="<?php echo $articles_count->publish ?>"
            class="button">
            Load more</button>
        </div>
    </div>
<?php
   // }
?>
    </div>
    <template id="article-template">

        <div class="articles__grid-item">
            <a href="#" class="article-link articles__link">
                <span class="articles__image">
                    <img src="" class="article-img" alt="">
                </span>
                <span class="articles__inset">
                    <h6 class="article-title articles__title"></h6>
                    <span class="article-date articles__date"></span>
                </span>
                <p class="article-tags articles__tags"></p>
            </a>
        </div>

    </template>
</section>
