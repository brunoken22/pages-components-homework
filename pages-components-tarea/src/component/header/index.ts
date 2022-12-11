export function initHeader() {
   class HeaderComponent extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const div = document.createElement("div");
         const style = document.createElement("style");
         div.classList.add("header");
         div.innerHTML = `
         <h2 class="titulo"> Header </h2>
         `;
         style.innerHTML = `
            .header{
               background-color:red;
               height:8vh;
               display:flex;
               flex-direction:column;
               justify-content:center;
               align-items:center;
            }
            .titulo {
               font-size: 1.9rem;
               color:#fff;
               text-align:center;
               margin:0;
            }
         `;
         shadow.appendChild(style);
         shadow.appendChild(div);
      }
   }
   customElements.define("custom-header", HeaderComponent);
}
