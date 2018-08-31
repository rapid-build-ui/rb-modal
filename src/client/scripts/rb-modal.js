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
		console.log('Hello RB-MODAL!');
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string
		};
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-modal', RbModal);
