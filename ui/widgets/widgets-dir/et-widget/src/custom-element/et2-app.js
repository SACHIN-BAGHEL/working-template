import ReactDOM from "react-dom"
import React from "react"
import App from '../App'



class Et2App extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('span')
        this.render()
    }

    render() {
        ReactDOM.render(<React.StrictMode>
                    <App/>
            </React.StrictMode>,
            this.appendChild(this.mountPoint))
    }
}

customElements.get('et2-app') || customElements.define("et2-app", Et2App)
