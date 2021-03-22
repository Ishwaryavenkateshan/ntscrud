import express from 'express';
import { UserController } from '../controllers/UserController';

let userController: UserController;

export class UserRouter {
    constructor() {
        userController = new UserController();
    }
    userRouter(app: express.Application) {
        app.post('/user', userController.userCreate);
        app.get('/get/:id',userController.userRead);
        app.get('/user/get',userController.userReadAll);
        app.put('/ud/:id',userController.userUpdate);
        app.delete('/del/:id',userController.userDelete);
    }
}

