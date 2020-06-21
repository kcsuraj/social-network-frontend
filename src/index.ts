import './helloView';

class RootApp extends HTMLElement {
  private helloViewEl: HTMLElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    this.helloViewEl = document.createElement('hello-view');
    shadow.appendChild(this.helloViewEl);
  }

  public disconnectedCallback() {
    if (this.helloViewEl === null) {
      return;
    }
  }
}
window.customElements.define('root-app', RootApp);
