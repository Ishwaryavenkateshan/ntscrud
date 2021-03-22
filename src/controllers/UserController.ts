import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

let userService: UserService;

export class UserController {
    constructor() {
        userService = new UserService();
    }

    async userCreate(req: Request, res: Response) {
        const user: any = await userService.userCreate(req.body);
        res.status(200).send(user);
    }
        
    async userRead(req: Request, res: Response) {
        const user: any = await userService.userRead(req.params.id);
        res.status(200).send(user);
    }
    async userReadAll(req: Request, res: Response) {
        const user: any = await userService.userReadAll;
        res.status(200).send(user);
    }
    async userUpdate(req: Request, res: Response) {
        const user: any = await userService.userUpdate(req.params.id, req.body);
        res.status(200).send(user);
    }
    async userDelete(req: Request, res: Response) {
        const user: any = await userService.userDelete(req.params.id);
        res.status(200).send(user);
    }

}


