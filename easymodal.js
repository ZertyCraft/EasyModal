class EasyModal {
    constructor(options) {
        const defaultOptions = {
            content: "<p>This is the modal content</p>",
            width: "400px",
            height: "200px",
            closeButton: true
        };

        this.options = { ...defaultOptions, ...options };
        this.createModal();
        this.attachEvents();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.classList.add('easy-modal');

        const closeButtonHtml = this.options.closeButton ? '<span class="modal-close" onclick="modal.close()">×</span>' : '';

        this.modal.innerHTML = `
      <div class="modal-content" style="width: ${this.options.width}; height: ${this.options.height};">
        ${closeButtonHtml}
        ${this.options.content}
      </div>
    `;

        document.body.appendChild(this.modal);
    }

    attachEvents() {
        this.modal.addEventListener('click', this.handleOutsideClick.bind(this));
        document.addEventListener('keydown', this.handleEscapePress.bind(this));
    }

    handleOutsideClick(e) {
        if (e.target.classList.contains('easy-modal')) {
            this.close();
        }
    }

    handleEscapePress(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }

    destroy() {
        this.modal.removeEventListener('click', this.handleOutsideClick.bind(this));
        document.removeEventListener('keydown', this.handleEscapePress.bind(this));
        this.modal.remove();
    }
}
