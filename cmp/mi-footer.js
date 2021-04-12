class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ximello Cantero Edgar Eduardo`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
