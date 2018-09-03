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
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string,
			show: Object.assign({}, props.boolean, {
				deserialize(val) {
					return /^true$/i.test(val);
				}
			})
		};
	}

	closeModal() {
		this.show = !this.show;
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-modal', RbModal);
