<?php
    $faqs_fields = get_sub_field('buying_faqs');
    $section_title = strip_tags($faqs_fields['section_title'],'<strong><b>');
    if($faqs_fields['file']) {
?>
<section id="buyingFaqs" class="section faqs">
    <div class="container">
        <h2 class="faqs__title section__title"><?php echo $section_title ?></h2>
        <h3 class="faqs__subtitle"><?php echo $faqs_fields['file_label'] ?></h3>
        <a href="<?php echo $faqs_fields['file']['url'] ?>" target="_blank" title="<?php echo $faqs_fields['file_label'] ?>" class="button button--alt">Download</a>
    </div>
</section>
<?php
    }
?>
