export class DownloadTools {
    constructor(ele) {
        this.toolsWrap = ele;
        this.mainNav = this.toolsWrap.getElementsByClassName('tools-main-nav')[0];
        this.subnav = this.toolsWrap.getElementsByClassName('tool-subnav')[0];
        this.restURL = localizedData.siteURL + '/wp-json/load-more/v1/tools/';
        this.currentId = this.mainNav.querySelector('.active').getAttribute('data-id');
        this.currentTool;
        this.getTools();
        this.setMainNavEvent();
    }

    setMainNavEvent() {
        let mainNavItems = [...this.mainNav.querySelectorAll('li')];

        mainNavItems.forEach((item,index,arr)=> {
            item.addEventListener('click', (e) => {
                let target = e.target;
                let toolTitle = this.toolsWrap.getElementsByClassName('tool-title')[0];
                toolTitle.innerHTML = item.innerHTML;
                this.currentId = target.getAttribute('data-id');
                this.getTools();

                mainNavItems.forEach((innerItem,innerIndex,innerArr) => {
                    if(target !== innerItem) {
                        innerItem.classList.remove('active');
                    }else {
                        innerItem.classList.add('active');
                    }
                })
            });
        });
    }

    getTools() {
        this.toolsWrap.classList.add('loading');
        let fullURL = this.restURL + this.currentId;
        fetch(fullURL)
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
            this.currentTool = data;console.log('data',data);
            this.renderData();
            this.toolsWrap.classList.remove('loading');
        });   
    }
    renderData() {

        this.subnav.innerHTML = '';
        this.currentTool['cat_items'].forEach((item, index, arr) => {
            let liNode = document.createElement('li');
            liNode.innerHTML = item['item_title'];
            liNode.setAttribute('data-index',index);
            if(index === 0) {
                liNode.setAttribute('class','active');
                this.setFirstData(liNode);
            }
            this.subnav.appendChild(liNode);
            this.setSubnavEvents();
        });
    }
    setSubnavEvents() {
        let subnavItems = this.subnav.querySelectorAll('li');
        subnavItems.forEach((item,index,arr) => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                // let toolIndex = item.getAttribute('data-index');
                // let toolContent = this.toolsWrap.getElementsByClassName('tool-content')[0];
                // let toolImg = this.toolsWrap.getElementsByClassName('tool-img')[0];
                // let toolDownload = this.toolsWrap.getElementsByClassName('tool-download')[0];
                 let siblings = [...this.subnav.querySelectorAll('li')];

                siblings.forEach((item,index,arr) => {
                    if(item !== target) {
                        item.classList.remove('active');
                    }else {
                        item.classList.add('active');
                    }
                });

                // toolContent.innerHTML = this.currentTool['cat_items'][toolIndex].item_info;
                // toolImg.setAttribute('src',this.currentTool['cat_items'][toolIndex].item_file_img.url);
                // toolDownload.setAttribute('href',this.currentTool['cat_items'][toolIndex].item_file.url);
                this.setFirstData(item);
            });
        });
    }
    setFirstData(item) {
        let toolIndex = item.getAttribute('data-index');
        let toolContent = this.toolsWrap.getElementsByClassName('tool-content')[0];
        let toolImg = this.toolsWrap.getElementsByClassName('tool-img')[0];
        let toolDownload = this.toolsWrap.getElementsByClassName('tool-download')[0];
        let currentTypeClass = toolDownload.getAttribute('data-type-class');
        let newTypeClass = 'type--' + this.currentTool['file_types'][toolIndex];

        toolContent.innerHTML = this.currentTool['cat_items'][toolIndex].item_info;
        toolImg.setAttribute('src',this.currentTool['cat_items'][toolIndex].item_file_img.url);
        toolDownload.setAttribute('href',this.currentTool['cat_items'][toolIndex].item_file.url);
        toolDownload.classList.remove(currentTypeClass);
        toolDownload.setAttribute('data-type-class',newTypeClass);
        //toolDownload.classList.add(this.currentTool['file_types'][toolIndex]);
        toolDownload.classList.add(newTypeClass);

    }
}