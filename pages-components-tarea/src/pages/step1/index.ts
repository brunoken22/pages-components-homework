export function initStep1(params) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.innerHTML = `
   <custom-header></custom-header>
   <div class="contenedor">
      <custom-text variant="title">Necesitamos unos datos más</custom-text>
      <custom-input label="Email :"></custom-input>
      <custom-input label="Comida favorita :"></custom-input>
      <custom-form-select>Alguna de estas tres opciones :</custom-form-select>
      <custom-btn btn="Comenzar" class="comenzar"></custom-btn>
      <custom-btn btn="Volver" class="volver" ></custom-btn>
   </div>
   <custom-footer></custom-footer>
   `;
   style.innerHTML = `
   .contenedor{
      padding:3rem 1.3rem;

   }
`;
   div.appendChild(style);

   const btnComenzar = div.querySelector(".comenzar");
   btnComenzar!.addEventListener("click", () => {
      params.goTo("/thankYou");
   });
   const btnVolver = div.querySelector(".volver");
   btnVolver!.addEventListener("click", () => {
      params.goTo("/welcome");
   });
   return div;
}
