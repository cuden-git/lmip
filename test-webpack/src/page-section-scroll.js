export class PageSectionScroll {
    constructor() {
        this.urlHash = window.location.hash;
        
        if(this.urlHash !== '') {
            this.pageSection = document.querySelector(this.urlHash);
            this.getSectionPosition();
            this.topPosition = 0;
        }
    }

    getSectionPosition() {
        if(this.pageSection === null) {
            return;
        }

        let eleRect = this.pageSection.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.topPosition = eleRect.top + scrollTop;
        this.scrollToSection();
    }

    scrollToSection() {
        window.scrollTo({
            top: this.topPosition,
            left: 0,
            behavior: 'smooth'
        });
    }
}