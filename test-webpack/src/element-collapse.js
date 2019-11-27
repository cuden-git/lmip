export class ElementCollapse {
    constructor(ele) {
        this.trigger = ele;
        this.target = document.getElementById(this.trigger.getAttribute('data-target'));
        this.setTriggerEvent();
    }

    setTriggerEvent() {
        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.target.classList.toggle('open');
            this.trigger.classList.toggle('active');

            if(this.target.classList.contains('open')) {
                this.target.style.height = this.target.querySelector('*').scrollHeight + 'px';
            }else {
                this.target.style.removeProperty('height');
            }
        });
    }
}