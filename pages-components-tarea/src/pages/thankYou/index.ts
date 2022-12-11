export function initThankYou(parmas) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.innerHTML = `
   <custom-header></custom-header>
   <div class="contenedor">
    <custom-text variant="title">Gracias</custom-text>
    <custom-text variant="body">Toda la información que nos brindaste es muy importante</custom-text>
    <custom-btn btn="De Nada"></custom-btn>
   </div>
   <custom-footer></custom-footer>
   `;
   style.innerHTML = `
      .contenedor{
         padding:3rem 1.5rem;
         height:60vh;
      }
   `;
   div.appendChild(style);
   div.addEventListener("click", () => {
      parmas.goTo("/welcome");
   });
   return div;
}
