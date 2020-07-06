import { customElement, html, LitElement } from 'lit-element';
import './components/formField/FormField';

@customElement('app-root')
class App extends LitElement {
  public render() {
    return html`
      <div>
        <h4>Parent component</h4>
        <form-field> </form-field>
      </div>
    `;
  }
}
