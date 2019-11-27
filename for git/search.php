<?php get_header();?>
<?php
global $wp_query;
$total_results = $wp_query->found_posts;
?>
<section class="section search-output">
    <div class="container">
        <h2 class="section__title"><strong>Search</strong> Results</h2>
        <p class="search-output__announcment">Showing <?php echo $total_results ?> results for:</p>
        <p class="search-output__term"><?php echo get_search_query(); ?></p>
        <ul class="search-output__results">

        <?php while (have_posts()) : the_post();

            $post_type = get_post_type();

            switch ($post_type) {
                case 'case-studies':
                    $terms = get_the_terms( get_the_ID(), 'case-studies-category' );
                    $urlParams = '?case-study-id='.get_the_ID().'#caseStudies';
                    $urlSubDir = ($terms[0]->slug == 'why-buy-in-london')? '/why-buy-in-london/' : '/why-buy-in-london/' ;
                    $page_link = $urlSubDir.$urlParams;

                    break;
                case 'download-tools':
                    $urlParams = '#downloadTools';
                    $page_link = '/tell-the-london-market-story/'.$urlParams;
                    break;
                case 'post':
                    $urlParams = '#articles';
                    $page_link = '/why-buy-in-london/'.$urlParams;
                    break;
                default:

                $page_link = get_the_permalink();
            }

        ?>
            <li class="search-output__results-item"><a href="<?php echo $page_link; ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></li>
        <?php endwhile; ?>
        </ul>
        <?php echo paginate_links(
            array(
                'type' => 'list',
                'prev_text' => 'prev',
                'next_text' => 'next'
                )
            ); ?>

    </div>
</section>
<?php get_footer();?>
