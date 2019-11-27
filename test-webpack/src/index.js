import { LoadMoreArticles } from './load-more-artcles';
import { LoadCaseStudy } from './load-case-study'
import { FilterArticles } from './filter-articles';
import { DownloadTools } from './download-tools';
import { PageSectionScroll } from './page-section-scroll';
import { ElementCollapse } from './element-collapse';

const classImports = [
    LoadMoreArticles,
    FilterArticles,
    LoadCaseStudy,
    DownloadTools,
    ElementCollapse
];

let initFncs = [...document.querySelectorAll('[data-js]')];
export const fncs = [];
initFncs.forEach((item, index, arr) => {

    let fncName = item.getAttribute('data-js');
    classImports.forEach((classItem)=>{
        if(fncName == classItem.name) {
            fncs.push(
                    {
                        fncName: classItem.name,
                        fnc: new classItem(item)
                    }
                );
            //let init = new classItem(item);
        }
    });
});

let pageSectionScroll = new PageSectionScroll();