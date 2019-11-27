import { fncs } from './index';

export class FilterArticles {
    constructor(ele) {
        this.filterEle = ele;

       // this.fncs;
        this.loadMoreFnc = null;
        this.fncs = fncs;
        this.listingEle = document.getElementById(this.filterEle.getAttribute('data-target'));
        this.setFilterEvent();
    }

    findFnc(fncName) {
        
        this.fncs.forEach((item,index,arr) => {
            if(item.hasOwnProperty('fncName') && item['fncName'] === fncName) {
                
               // item.fnc.testFnc();
                this.loadMoreFnc = item.fnc;
            }
        });
    }

    clearStage() {
        this.listingEle.innerHTML = '';
    }
    setFilterEvent() {
    
        this.filterEle.addEventListener('change', (e) => {

            if(this.loadMoreFnc === null) {
                this.findFnc('LoadMoreArticles');
            } 
            this.clearStage();
            this.loadMoreFnc.offset = 0;
            //this.loadMoreFnc.setTriggerAttr('data-offset',0);
            this.loadMoreFnc.tag = this.filterEle.value;
            this.loadMoreFnc.getArticles();
        });
    }
}