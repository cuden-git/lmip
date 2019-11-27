function loadVideoJs() {
    if (!document.getElementById('case-study-video')) {
        return;
    }
    const player = videojs('case-study-video', {}, () => {
        player.src({ type: 'video/youtube', src: localizedData.articleVideoURL })
    })
}

function inputFocus() {
    var searchTrigger = document.querySelector('[data-target="site-search"]');
    var searchInput = document.querySelector('#' + searchTrigger.getAttribute('data-target') + ' #s');

    if(!searchInput) {
        return;
    }

    searchTrigger.addEventListener('click', function(e) {
        searchInput.focus();
    });
}

(function ($) {
})(jQuery);

window.addEventListener('DOMContentLoaded', () => {
    loadVideoJs();
    inputFocus();
});