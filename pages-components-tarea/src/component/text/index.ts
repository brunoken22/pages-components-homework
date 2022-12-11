export function initText() {
   class Text extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         const shadow = this.attachShadow({ mode: "open" });
         const variant =
            this.getAttribute("variant") || "body" || "form__title";
         const style = document.createElement("style");
         const h3 = document.createElement("h3");
         h3.className = variant;

         style.innerHTML = `
            .title {
               font-size : 3rem ;
               margin:0;
            }
            .body{
               font-size:1rem;
               
            }
            .form__title{
               font-size:1.3rem;
            }
         `;
         h3.textContent = this.textContent;
         shadow.appendChild(style);
         shadow.appendChild(h3);
      }
   }
   customElements.define("custom-text", Text);
}
