	/***********
 * RB-MODAL
 ***********/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import template from '../views/rb-modal.html';

export class RbModal extends RbBase() {
	/* Lifecycle
	 ************/
	viewReady() {
		super.viewReady && super.viewReady();
		this.rb.events.add(window, 'keydown', this.keyCloseModal);
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
			})
		};
	}

	closeModal() {
		this.show = false;
	}

	keyCloseModal(evt) {
		if (!this.show) return;
		if (evt.keyCode !== 27) return; // 27 is escape key
		this.closeModal();
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-modal', RbModal);
