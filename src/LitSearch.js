import { html, LitElement } from 'lit';

export class LitSearch extends LitElement {

  static properties = {
    data: { type: Array },
    result: { type: Array } 
  };

  constructor() {
    super();
    this.data = [
      { name: 'iPhone',
        price: 1000
      },
      { name: 'Xbox',
        price: 500
      },
      { name: 'PC',
        price: 2000
      },
      { name: 'Xiaomi',
        price: 200
      },
      { name: 'Play Station',
        price: 600
      },
    ]
    this.result = this.data;
  }

  render() {
    return html`
      <h1>Buscador en Lit Element</h1>

      <input @keyup=${this.filterData} type='text' id='form'/>
      <button @click=${this.filterData}>Buscar</button>

      <ul>
        ${this?.result.map(item => html`
            <li>${item?.name} - ${item?.price}</li>
        `)}
           
      </ul>
    `;
  }

  filterData() {
    const input = this.shadowRoot.querySelector('#form').value?.toLowerCase();
    this.result = []; 

    this.data?.map(product => {
      const name = product?.name?.toLocaleLowerCase();

      if(name.indexOf(input) !== -1){
        this.result = [...this.result, product]
      }
    })

    if(this.result.length < 1) this.result = [{name: 'No hay productos con esa descripción'}]
  }
}
