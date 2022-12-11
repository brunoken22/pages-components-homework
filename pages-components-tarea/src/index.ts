import { initRoute } from "./router";
import { initHeader } from "./component/header";
import { initFooter } from "./component/footer";
import { initText } from "./component/text";
import { initInput } from "./component/form_input";
import { initBtn } from "./component/form_btn";
import { initSelect } from "./component/form-select";

(function () {
   const root = document.querySelector(".root");
   initHeader();
   initFooter();
   initText();
   initInput();
   initSelect();
   initBtn();
   initRoute(root!);
})();
