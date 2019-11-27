<?php
    $help_fields = get_sub_field('help_fields');
    $section_title = strip_tags(get_sub_field('section_title'),'<strong><b>');
?>
<section id="learnHelp" class="section help">
    <div class="container">
        <h2 class="section__title"><?php echo $section_title; ?></h2>
        <div class="help__grid">

                <h3 class="help__col-1-title"><?php echo $help_fields['col_one_title'] ?></h3>
                <div class="help__col-1-text">
                    <?php echo $help_fields['col_one_content'] ?>
                </div>
                <a href="<?php echo $help_fields['col_one_download']['url'] ?>" target="_blank" title="<?php echo $help_fields['col_one_download_title']?>" class="help__download help__col-1-button"><?php echo $help_fields['col_one_download_title']?></a>

                <h3 class="help__col-2-title"><?php echo $help_fields['col_two_title'] ?></h3>
                <div class="help__col-2-text">
                    <?php echo $help_fields['col_two_content'] ?>
                </div>
                <a href="<?php echo $help_fields['col_two_download']['url'] ?>" target="_blank" title="<?php echo $help_fields['col_two_download_title']?>" class="help__download help__col-2-button"><?php echo $help_fields['col_two_download_title']?></a>

        </div>
    </div>
</section>
