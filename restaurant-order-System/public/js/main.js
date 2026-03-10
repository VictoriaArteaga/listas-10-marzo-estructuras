import { AppController } from "./controllers/AppController";
const app = new AppController();
window.onload = () => {
    app.init();
};
