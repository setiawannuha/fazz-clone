import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faArrowRight,
  faChalkboardUser,
  faCheck,
  faGraduationCap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { createPinia } from "pinia";

const pinia = createPinia();

/* add icons to the library */
library.add(
  faUserSecret,
  faArrowRight,
  faChalkboardUser,
  faCheck,
  faGraduationCap,
  faStar
);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
