<?php get_header();?>

<div class="page-intro">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                    <h1><?php the_archive_title() ?></h1>
            </div>
        </div>
    </div>
</div>

<div class="content-area">
    <div class="container">
        <div id="case-studies" class="row">
                <?php if (have_posts()) : while (have_posts()) : the_post();
                    $case_study_type_class = (get_field('video_url'))? 'case-study-video' : 'case-study-text';
                    $case_study_img = get_field('case_study_image')
                ?>
                <a href="<?php the_permalink() ?>" class="case-study <?php echo $case_study_type_class ?> col-12 col-sm-3" title="<?php the_title() ?>">
                    <img src="<?php echo $case_study_img['url'] ?>" alt="<?php echo $case_study_img['alt'] ?>">
                    <h2><?php the_title() ?></h2>
                    <span><?php the_date('d-F-Y') ?></span>
                </a>
                <?php endwhile; endif; ?>
        </div>
    </div>
</div>

<?php get_footer();?>
