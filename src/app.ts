import * as express from "express";
import * as bodyParser from "body-parser";
import { Status } from "./controllers/status";
import { User } from "./controllers/user";
import { Auth } from "./controllers/auth";

class App {
  constructor() {
    this.app = express();
    this.config();
    this.setRoutes();
  }

  public app: express.Application;
  // Controllers 
  public statusController: Status = new Status();
  public userController: User = new User();
  public authController: Auth = new Auth();

  // express settings
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.enable('trust proxy');
  }

  // configure routes
  private setRoutes(): void {
    this.app.get('/', this.statusController.get)
    this.app.post('/user/create', this.userController.createUser);
    this.app.get('/user/:username', this.authController.isValid, this.userController.getUser);
  }
}

export default new App().app;