export function initInput() {
   class Input extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const label = this.getAttribute("label");
         const div = document.createElement("div");
         const style = document.createElement("style");
         div.classList.add("form");
         div.innerHTML = `
            <label for="name" >${label}</label>
            <input type="text" name="name" id="name" required>
         `;

         style.innerHTML = `
            .form{
               display:flex;
               flex-direction:column;
               row-gap:0.5rem;
               margin-top:1.5rem;
            }
            label{
               display:block;
            }
            input{
               font-size:1.1rem;
               height:40px;
               padding:0;
               margin:0;
               border:solid 2px #000;
               padding-left:1rem;
            }
         `;
         shadow.appendChild(style);
         shadow.appendChild(div);
      }
   }
   customElements.define("custom-input", Input);
}
