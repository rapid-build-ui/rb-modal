/***********
 * RB-MODAL
 ***********/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import '../../rb-button/scripts/rb-button.js';
import template from '../views/rb-modal.html';

export class RbModal extends RbBase() {
	/* Lifecycle
	 ************/
	viewReady() {
		super.viewReady && super.viewReady();
		this.rb.elms.container = this.shadowRoot.querySelector('.container');
		this.rb.events.add(window, 'keydown', this.keyCloseModal);
		this.rb.events.add(window, 'click touchstart', this.backdropCloseModal);
	}

	/* Properties
	 *************/
	static get props() {
		return {
			center: props.boolean,
			kind: props.string,
			show: Object.assign({}, props.boolean, {
				deserialize(val) {
					return /^true$/i.test(val);
				}
			}),
			unclosable: props.boolean
		};
	}

	/* Observer
	 ***********/
	updating(prevProps, prevState) { // :void
		if (prevProps.show === this.show) return;
		this.rb.events.emit(this, 'show-changed', {
			detail: { show: this.show }
		});
	}

	/* Event Handlers
	 *****************/
	closeModal() {
		if (this.unclosable) return;
		this.show = false;
	}

	keyCloseModal(evt) {
		if (!this.show) return;
		if (evt.keyCode !== 27) return; // 27 is escape key
		this.closeModal();
	}

	backdropCloseModal(evt) {
		if (!this.show) return;
		const path = evt.composedPath();
		if (path.includes(this.rb.elms.container)) return;
		this.closeModal();
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-modal', RbModal);
