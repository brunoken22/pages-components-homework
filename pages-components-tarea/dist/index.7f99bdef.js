const e=[{path:/\/welcome/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n      <custom-header></custom-header>\n      <div class="contenedor">\n         <custom-text variant="title">Te damos la bienvenida a esta página</custom-text>\n         <custom-text variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>\n      \n         <form class="formulario" action>  \n            <custom-text variant="form__title" >Para continuar ingresá tu nombre</custom-text>\n            <custom-input label="Nombre :"></custom-input>\n            <custom-btn btn="Comenzar" class="btn"></custom-btn>\n         </form>\n      </div>\n      <custom-footer></custom-footer>\n   ',t.innerHTML="\n      .contenedor{\n         padding:3rem 1.5rem;\n\n      }\n\n   ",n.appendChild(t),n.querySelector(".btn").addEventListener("click",(()=>{e.goTo("/step1")})),n}},{path:/\/step1/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n   <custom-header></custom-header>\n   <div class="contenedor">\n      <custom-text variant="title">Necesitamos unos datos más</custom-text>\n      <custom-input label="Email :"></custom-input>\n      <custom-input label="Comida favorita :"></custom-input>\n      <custom-form-select>Alguna de estas tres opciones :</custom-form-select>\n      <custom-btn btn="Comenzar" class="comenzar"></custom-btn>\n      <custom-btn btn="Volver" class="volver"></custom-btn>\n   </div>\n   <custom-footer></custom-footer>\n   ',t.innerHTML="\n   .contenedor{\n      padding:3rem 1.3rem;\n\n   }\n",n.appendChild(t),n.querySelector(".comenzar").addEventListener("click",(()=>{e.goTo("/thankYou")})),n.querySelector(".volver").addEventListener("click",(()=>{e.goTo("/welcome")})),n}},{path:/\/thankYou/,component:function(e){const n=document.createElement("div"),t=document.createElement("style");return n.innerHTML='\n   <custom-header></custom-header>\n   <div class="contenedor">\n    <custom-text variant="title">Gracias</custom-text>\n    <custom-text variant="body">Toda la información que nos brindaste es muy importante</custom-text>\n    <custom-btn btn="De Nada"></custom-btn>\n   </div>\n   <custom-footer></custom-footer>\n   ',t.innerHTML="\n      .contenedor{\n         padding:3rem 1.5rem;\n         height:60vh;\n      }\n   ",n.appendChild(t),n.addEventListener("click",(()=>{e.goTo("/welcome")})),n}}];!function(){const n=document.querySelector(".root");!function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.classList.add("header"),n.innerHTML='\n         <h2 class="titulo"> Header </h2>\n         ',t.innerHTML="\n            .header{\n               background-color:red;\n               height:8vh;\n               display:flex;\n               flex-direction:column;\n               justify-content:center;\n               align-items:center;\n            }\n            .titulo {\n               font-size: 1.9rem;\n               color:#fff;\n               text-align:center;\n               margin:0;\n            }\n         ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-header",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.classList.add("footer"),n.innerHTML='\n            <h2 class="footer__titulo">Footer</h2>\n         ',t.innerHTML="\n         .footer{\n            background-color:#ff5d5d;\n            height:40vh;\n            display:flex;\n            justify-content:center;\n            align-items: center; \n         }\n         .footer .footer__titulo {\n            font-size: 1.9rem;\n            color:#fff;\n            margin:0;\n         }\n         ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-footer",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=this.getAttribute("variant")||"body",t=document.createElement("style"),o=document.createElement("h3");o.className=n,t.innerHTML="\n            .title {\n               font-size : 3rem ;\n               margin:0;\n            }\n            .body{\n               font-size:1rem;\n               \n            }\n            .form__title{\n               font-size:1.3rem;\n            }\n         ",o.textContent=this.textContent,e.appendChild(t),e.appendChild(o)}}customElements.define("custom-text",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=this.getAttribute("label"),t=document.createElement("div"),o=document.createElement("style");t.classList.add("form"),t.innerHTML=`\n            <label for="name" >${n}</label>\n            <input type="text" name="name" id="name" required>\n         `,o.innerHTML="\n            .form{\n               display:flex;\n               flex-direction:column;\n               row-gap:0.5rem;\n               margin-top:1.5rem;\n            }\n            label{\n               display:block;\n            }\n            input{\n               font-size:1.1rem;\n               height:40px;\n               padding:0;\n               margin:0;\n               border:solid 2px #000;\n               padding-left:1rem;\n            }\n         ",e.appendChild(o),e.appendChild(t)}}customElements.define("custom-input",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");n.classList.add("form_select"),n.innerHTML=`\n            <label for="name">${this.textContent}</label>\n            <select name="" id="" class="select" required>\n               <option value="piedra">Piedra</option>\n               <option value="papel">Papel</option>\n               <option value="tijera">Tijera</option>\n            </select>\n         `,t.innerHTML="\n\n            .form_select{\n               margin-top:1.5rem;\n               dislay:flex;\n               row-gap:0.5rem;\n            }\n            \n            .select{\n               border:solid 2px #000;\n               display:block;\n               width:100%;\n               text-aling:center;\n               height:44px;\n               font-size:1.1rem;\n            }\n\n            .select option{\n               width:50px;\n            }\n         ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-form-select",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=this.getAttribute("btn"),t=document.createElement("div"),o=document.createElement("style");t.innerHTML=`\n            <button>${n}</button>\n         `,o.innerHTML="\n            button{\n               width:100%;\n               margin-top:2rem;\n               border:none;\n               background-color:#9CBBE9;\n               height:40px;\n               font-size:1.1rem;\n               font-weight: 600;\n            }\n         ",e.appendChild(o),e.appendChild(t)}}customElements.define("custom-btn",e)}(),function(n){function t(e){history.pushState({},"",e),o(e)}function o(o){console.log("El handler Root recibio una nueva ruta",o);for(let r of e)if(r.path.test(o)){let e=r.component({goTo:t});n.firstChild&&n.firstChild.remove(),n.appendChild(e)}}"/"==location.pathname?t("/welcome"):o(location.pathname),window.onpopstate=()=>{o(location.pathname)}}(n)}();
//# sourceMappingURL=index.7f99bdef.js.map
