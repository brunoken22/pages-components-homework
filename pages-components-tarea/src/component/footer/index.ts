export function initFooter() {
   class Footer extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const div = document.createElement("div");
         const style = document.createElement("style");

         div.classList.add("footer");
         div.innerHTML = `
            <h2 class="footer__titulo">Footer</h2>
         `;

         style.innerHTML = `
         .footer{
            background-color:#ff5d5d;
            height:40vh;
            display:flex;
            justify-content:center;
            align-items: center; 
         }
         .footer .footer__titulo {
            font-size: 1.9rem;
            color:#fff;
            margin:0;
         }
         `;

         shadow.appendChild(style);
         shadow.appendChild(div);
      }
   }
   customElements.define("custom-footer", Footer);
}
