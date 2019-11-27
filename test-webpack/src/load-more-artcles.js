import { fncs } from './index';

export class LoadMoreArticles {
    constructor(ele) {console.log('fncs',fncs);
        this.loadTrigger = ele;
        //this.isMenu = (this.loadTrigger.getAttribute('data-menu') !== null)? true : false ;
        this.listingEle = document.getElementById(this.loadTrigger.getAttribute('data-target'));
        this.perPage = parseInt(this.loadTrigger.getAttribute('data-per-page'));
        this.offset = parseInt(this.loadTrigger.getAttribute('data-offset'));
        this.articlesTotal = this.loadTrigger.getAttribute('data-total');
        this.restURL;// = localizedData.siteURL + '/wp-json/load-more/v1/posts/' + this.perPage + '/' + this.offset;
        this.template = document.getElementById('article-template');
        this.articles;
        this.tag = '';
        this.noMore;
        this.setBtnEvent();
    }
    testFnc() {
        alert('test passed');
    }
    getArticles() {
        document.body.classList.add('loading');
        this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/posts/' + this.perPage + '/' + this.offset;
        
        if(this.tag !== '') {
            this.restURL = this.restURL + '/' + this.tag
        }
      
        fetch(this.restURL)
            .then((resp) => resp.json()) // Transform the data into json
            .then((data) => {//console.log('data',data);
                this.articles = [];
                this.articles = data['articles'];console.log('this.articles',this.articles);
                this.articlesTotal = data['total']['publish'];
                this.noMore = data['no_more'];
                this.renderData();
                document.body.classList.remove('loading');
            });
    }

    renderData() {
        this.articles.forEach(
            (item, index, arr) => {

                let templateClone = document.importNode(this.template.content, true);
                let wrapper = templateClone.querySelector('.articles__grid-item');
                let link = templateClone.querySelector('.article-link');
                let img = templateClone.querySelector('.article-img');
                let title = templateClone.querySelector('.article-title');
                let date = templateClone.querySelector('.article-date');
                let tags = templateClone.querySelector('.article-tags');

                wrapper.classList.add('article-' + item.type);
                link.setAttribute('href', item.link);
                img.setAttribute('src', item.img.url);
                title.innerHTML = item.title;
                date.innerHTML = item.date;
                tags.innerHTML = item.tags;
                link.appendChild(tags);
                this.listingEle.appendChild(templateClone);
            }
        );
        this.updateSettings();
    }

    setBtnEvent() {
        let eventType = 'click';
        this.loadTrigger.addEventListener(eventType, (e) => {
            // if(this.isMenu) {
            //     this.tag = this.loadTrigger.value;
            // }
            this.getArticles();
        });
    }

    setTriggerAttr(attrName,attrVal) {
        this.loadTrigger.setAttribute(attrName,attrVal);
       // console.log('this.loadTrigger', this.loadTrigger);
    }

    updateSettings() {

        this.offset = this.perPage + this.offset;//parseInt(this.loadTrigger.getAttribute('data-offset'));
       // alert(('this.offset = ' + this.offset + ' / this.articlesTotal = ' + this.articlesTotal) );
        //if (this.offset >= this.articlesTotal) {
        if (this.noMore) {
            this.loadTrigger.classList.add('d-none');
        } else {
            this.loadTrigger.classList.remove('d-none');
            this.loadTrigger.setAttribute('data-offset', this.offset);
        }
    }
}