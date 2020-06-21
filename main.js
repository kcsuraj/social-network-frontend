customElements.define(
  "sample-content",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("sample-content");
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);
