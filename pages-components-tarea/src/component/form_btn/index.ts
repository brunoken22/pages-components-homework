export function initBtn() {
   class Btn extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const variant = this.getAttribute("btn");
         const clase = this.getAttribute("class");
         const div = document.createElement("div");
         const style = document.createElement("style");
         div.innerHTML = `
         <button>${variant}</button>
         `;

         if (variant === "Comenzar" || variant === "De Nada") {
            style.innerHTML = `
            button{
               width:100%;
               margin-top:2rem;
               border:none;
               background-color:#9CBBE9;
               height:40px;
               font-size:1.1rem;
               font-weight: 600;
            }
            `;
         } else if (variant === "Volver") {
            style.innerHTML = `
               button{
                  width:100%;
                  margin-top:2rem;
                  height:40px;
                  font-size:1.1rem;
                  font-weight: 600;
                  background-color: #fff;
                  border:solid 1px #000;
               }

               button:active{
                  background-color:#c6ddff;
                  font-size:1.2rem;
               }
            `;
         }

         shadow.appendChild(style);
         shadow.appendChild(div);
      }
   }
   customElements.define("custom-btn", Btn);
}
