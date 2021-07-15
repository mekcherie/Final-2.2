const template = document.createElement('template')

template.innerHTML = `
    <style>
      .ticker {
				margin: 3px;
        display: flex;
        color: 'blue';
        animation: moveText 10s infinite;
        transition-timing-function: linear;
      }
      @keyframes moveText {
        0% { transform: translate(0, 0); }
        100% { transform: translate(1800px, 0); }
      }
    </style>
    <h1 class='ticker'>
      Mek
    </h1>
  `

  class TickerTape extends HTMLElement {
    constructor() {
      super() 
      const tempNode = template.content.cloneNode(true)
		  this._shadowRoot = this.attachShadow({ mode: 'open' });
		  this._shadowRoot.appendChild(tempNode)

      // get the h1 tag from the template
      this._content = this.shadowRoot.querySelector('.ticker')
      // put the text of ticker-tape in a _text variable
      this._text = this.innerHTML
      // put the text inside the h1 tag
      this._content.innerHTML = this._text
    }
  }
  
  customElements.define('ticker-tape', TickerTape)