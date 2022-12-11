export function initWelcome(params) {
   const div = document.createElement("div");
   const style = document.createElement("style");
   div.innerHTML = `
      <custom-header></custom-header>
      <div class="contenedor">
         <custom-text variant="title">Te damos la bienvenida a esta página</custom-text>
         <custom-text variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
      
         <form class="formulario" action>  
            <custom-text variant="form__title" >Para continuar ingresá tu nombre</custom-text>
            <custom-input label="Nombre :"></custom-input>
            <custom-btn btn="Comenzar" class="btn"></custom-btn>
         </form>
      </div>
      <custom-footer></custom-footer>
   `;

   style.innerHTML = `
      .contenedor{
         padding:3rem 1.5rem;

      }

   `;
   div.appendChild(style);

   let btn = div.querySelector(".btn");
   btn!.addEventListener("click", () => {
      params.goTo("/step1");
   });
   return div;
}
