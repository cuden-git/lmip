<?php

    global $cat_name;

    $case_studies = get_posts(
        array(
            'post_type' => 'case-studies',
            'posts_per_page' => -1,
            'tax_query' => [
                [
                    'taxonomy' => 'case-studies-category',
                    'field' => 'slug',
                    'terms' => $cat_name
                ],
            ]
        )
    );
    if(isset($_GET['case-study-id'])) {
        foreach($case_studies as $case_study) {
            if($case_study->ID == $_GET['case-study-id']) {
                $featured_post = $case_study;
            }
        }
    }else {
        $featured_post = $case_studies[0];
    }
    $case_study_img = get_field('case_study_image',$featured_post->ID);
    $case_study_bg_colour = get_field('case_study_bg_colour',$featured_post->ID);
    $section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');
?>
<section id="caseStudies" class="section section--case-studies" style="background-color:<?php echo $case_study_bg_colour ?>">
    <div class="container">
        <!-- case-study content area -->
        <div>
            <div id="case-study" class="row">
                <div class="col-sm-6">
                    <h2 class="section__title"><?php echo $section_title ?></h2>
                    <p>Please select from the menu below to view further case studies.</p>
                    <!-- case-study select menu -->
                    <div class="select-wrap select-wrap--alt-reversed">
                        <select data-js="LoadCaseStudy" data-target="case-study" data-wrapper="caseStudies" class="select select--alt-reversed">
                            <?php
                                foreach($case_studies as $case_study) {
                                    $menu_label = (get_field('case_study_menu_label',$case_study->ID))? get_field('case_study_menu_label',$case_study->ID) : $case_study->post_title;
                            ?>
                                <option value="<?php echo $case_study->ID?>"<?php if($case_study->ID == $featured_post->ID) { echo ' selected'; } ?>>
                                    <?php echo $menu_label ?>
                                </option>
                            <?php }
                            ?>
                        </select>
                    </div>
                    <h3 class="case-study-title"><?php echo $featured_post->post_title ?></h3>
                    <div class="case-study-content">
                        <?php echo wpautop($featured_post->post_content) ?>
                    </div>
                </div>
                <div class="col-sm-6 case-studies-img-col">
                    <img src="<?php echo $case_study_img['url'] ?>" class="case-study-img" alt="<?php echo $case_study_img['alt'] ?>">
                </div>
            </div>
        </div>
    </div>
</section>
