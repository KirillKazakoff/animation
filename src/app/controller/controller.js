export default class Controller {
    constructor() {
        this.button = document.querySelector('.collapse');
        this.popover = document.querySelector('.popover');

        this.button.addEventListener('click', () => this.onButtonClick());
        this.hidden = false;
        this.animated = false;
    }

    onButtonClick() {
        if (this.animated) return;
        this.animated = true;

        const { popover } = this;

        popover.classList.add('popover-anim');

        const handler = () => {
            popover.style.animationDirection = 'normal';
            popover.classList.remove('popover-anim');

            this.checkState();
            popover.removeEventListener('animationend', handler);
            this.animated = false;
        };
        popover.addEventListener('animationend', handler);
    }

    checkState() {
        const { popover } = this;
        this.hidden = !this.hidden;

        if (this.hidden) {
            popover.style.animationDirection = 'normal';
            popover.classList.add('hidden');
            return;
        }

        popover.classList.remove('hidden');
        popover.style.animationDirection = 'reverse';
    }
}
