import { AppController } from "./controllers/AppController.js";
const app = new AppController();
window.onload = () => {
    app.init();
};
