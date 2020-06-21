import template from './template.html';

const templateEl = document.createElement('template');
templateEl.innerHTML = template;
class HelloView extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));
  }
}
window.customElements.define('hello-view', HelloView);
