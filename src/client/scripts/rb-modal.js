/***********
 * RB-MODAL
 ***********/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import Converter               from '../../rb-base/scripts/public/props/converters.js';
import template                from '../views/rb-modal.html';
import '../../rb-button/scripts/rb-button.js';

export class RbModal extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.state = {
			slots: {
				header: false,
				body:   false,
				footer: false
			}
		};
	}
	viewReady() {
		super.viewReady && super.viewReady();
		Object.assign(this.rb.elms, {
			content: this.shadowRoot.querySelector('.content')
		});
		this._attachEvents();
	}

	/* Properties
	 *************/
	static get props() {
		return {
			center: props.boolean,
			kind: props.string,
			noBackdrop: props.boolean,
			unclosable: props.boolean,
			open: Object.assign({}, props.boolean, {
				deserialize: Converter.boolean
			})
		};
	}

	/* Observer
	 ***********/
	updating(prevProps, prevState) { // :void
		if (prevProps.open === this.open) return;
		this.rb.events.emit(this, 'open-changed', {
			detail: { open: this.open }
		});
	}

	/* Event Management
	 *******************/
	_attachEvents() { // :void
		this.rb.events.add(window, 'keydown', this.keyCloseModal);
		this.rb.events.add(window, 'click touchstart', this.backdropCloseModal, {
			capture: true // so event fires first
		});
		this._initSlotchange();
	}

	/* Slot Event Handlers
	 **********************/
	_initSlotchange() { // needed for safari (todo: test lookbehind in edge)
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		if (!isSafari) return;
		const slots = this.shadowRoot.querySelectorAll('slot');
		for (const slot of slots) this.rb.events.emit(slot, 'slotchange');
	}
	_cleanSlotWhitespace(slotNodes) { // :void (mutator: slot nodes)
		for (const child of slotNodes) {
			if (child.nodeType !== 3) continue;
			if (child.textContent.trim().length) continue;
			child.remove();
		}
	}
	_setSlotState(evt) { // :void
		const slot      = evt.currentTarget;
		const slotName  = slot.name || 'body';
		const slotNodes = slot.assignedNodes();
		this._cleanSlotWhitespace(slotNodes);
		const hasContent = !!slotNodes.length;
		this.state.slots[slotName] = hasContent;
		this.triggerUpdate();
	}

	/* Event Handlers
	 *****************/
	closeModal() {
		if (this.unclosable) return;
		this.open = false;
	}
	keyCloseModal(evt) {
		if (!this.open) return;
		if (evt.keyCode !== 27) return; // 27 is escape key
		this.closeModal();
	}
	backdropCloseModal(evt) {
		if (!this.open) return;
		const path = evt.composedPath();
		if (!path.includes(this)) return; // elm under modal clicked via enter key
		if (path.includes(this.rb.elms.content)) return;
		this.closeModal();
	}

	/* Template
	 ***********/
	render({ props, state }) { // :string
		return html template;
	}
}

customElements.define('rb-modal', RbModal);
