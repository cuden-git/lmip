export class LoadCaseStudy {

    constructor(ele) {
        this.selectMenu = ele;
        this.caseStudyStage = document.getElementById(this.selectMenu.getAttribute('data-target'));
        this.wrapper = document.getElementById(this.selectMenu.getAttribute('data-wrapper'));
        this.setMenuEvent();
        this.currentID;
        this.restURL;
        this.caseStudy;
        this.imgEle = this.caseStudyStage.querySelector('.case-study-img');
    }

    getCaseStudy() {

        document.body.classList.add('loading');
        this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/case-studies/' + this.currentID;
       // alert(this.restURL);
        fetch(this.restURL)
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {
                this.caseStudy = data;
                this.renderData();
                document.body.classList.remove('loading');
            });
    }

    setMenuEvent() {
        this.selectMenu.addEventListener('change', () => {
            this.currentID = this.selectMenu.value;
            this.clearImg();
            this.getCaseStudy();
        })
    }

    renderData() {
        let titleEle = this.caseStudyStage.querySelector('.case-study-title');
        let contentEle = this.caseStudyStage.querySelector('.case-study-content');
       // let imgEle = this.caseStudyStage.querySelector('.case-study-img');
        
        titleEle.innerHTML = this.caseStudy.title;
        contentEle.innerHTML = this.caseStudy.content;
        this.imgEle.setAttribute('src',this.caseStudy.img.url);
        this.imgEle.setAttribute('alt',this.caseStudy.img.alt);
        this.wrapper.style.backgroundColor = this.caseStudy.bg_colour;
        this.imgEle.addEventListener('load', (e) => {
            this.imgEle.classList.remove('d-none');
        });
    }

    clearImg() {
        this.imgEle.classList.add('d-none');
    }
}