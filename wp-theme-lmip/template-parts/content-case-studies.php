<h1>Case studies</h1>
<?php
    $case_study_posts = get_posts(
    array(
            'post_type' => 'case-studies'
        )
    );
    foreach ($case_study_posts as $case_study) { ?>
        <a href="<?php the_permalink() ?>" class="case-study <?php echo $case_study_type_class ?> col-12 col-sm-3" title="<?php the_title() ?>">
                    <img src="<?php echo $case_study_img['url'] ?>" alt="<?php echo $case_study_img['alt'] ?>">
                    <h2><?php the_title() ?></h2>
                    <span><?php the_date('d-F-Y') ?></span>
                </a>
    <?php }
