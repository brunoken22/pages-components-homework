export function initSelect() {
   class Select extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });

         const div = document.createElement("div");
         const style = document.createElement("style");

         div.classList.add("form_select");
         div.innerHTML = `
            <label for="name">${this.textContent}</label>
            <select name="" id="" class="select" required>
               <option value="piedra">Piedra</option>
               <option value="papel">Papel</option>
               <option value="tijera">Tijera</option>
            </select>
         `;

         style.innerHTML = `

            .form_select{
               margin-top:1.5rem;
               dislay:flex;
               row-gap:0.5rem;
            }
            
            .select{
               border:solid 2px #000;
               display:block;
               width:100%;
               text-aling:center;
               height:44px;
               font-size:1.1rem;
            }

            .select option{
               width:50px;
            }
         `;

         shadow.appendChild(style);
         shadow.appendChild(div);
      }
   }
   customElements.define("custom-form-select", Select);
}
