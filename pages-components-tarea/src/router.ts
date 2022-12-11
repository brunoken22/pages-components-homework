import { initWelcome } from "./pages/welcome";
import { initStep1 } from "./pages/step1";
import { initThankYou } from "./pages/thankYou";

const router = [
   {
      path: /\/welcome/,
      component: initWelcome,
   },
   {
      path: /\/step1/,
      component: initStep1,
   },
   {
      path: /\/thankYou/,
      component: initThankYou,
   },
];

export function initRoute(container: Element) {
   function goTo(path) {
      history.pushState({}, "", path);
      handleRoute(path);
   }
   function handleRoute(root) {
      console.log("El handler Root recibio una nueva ruta", root);

      for (let r of router) {
         if (r.path.test(root)) {
            let el = r.component({ goTo });

            if (container.firstChild) {
               container.firstChild.remove();
            }
            container.appendChild(el);
         }
      }
   }
   if (location.pathname == "/") {
      goTo("/welcome");
   } else {
      handleRoute(location.pathname);
   }
   window.onpopstate = () => {
      handleRoute(location.pathname);
   };
}
