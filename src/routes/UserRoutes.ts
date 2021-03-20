import express from 'express';
import { UserController } from '../controllers/UserController';

let usercontroller: UserController;

export class userRouter {
    constructor() {
        usercontroller = new UserController();
    }
    userRouter(app: express.Application) {
        app.post('/user', usercontroller.usercreate);
        app.get('/get/:id',usercontroller.userread);
        app.get('/user/get',usercontroller.userreadall);
        app.put('/ud/:id',usercontroller.userupdate);
        app.delete('/del/:id',usercontroller.userdelete);
    }
}

