import { Request, Response } from 'express';
import { UserService } from '../Service/UserService';
import { UserModel } from '../models/userModels';

let userservice: UserService;

export class UserController {
    constructor() {
        userservice = new UserService();
    }

    async usercreate(req: Request, res: Response) {
        const user: any = await userservice.usercreate(req.body);
        res.status(200).send(user);
    }
        
    async userread(req: Request, res: Response) {
        const user: any = await userservice.userread(req.params.id);
        console.log("get----->>>",user)
        res.status(200).send(user);
    }
    async userreadall(req: Request, res: Response) {
        const user: any = await userservice.userreadall;
        console.log("getall----->>>",user)
        res.status(200).send(user);
    }
    async userupdate(req: Request, res: Response) {
        const user: any = await userservice.userupdate(req.params.id, req.body);
        console.log("update----->>>",user)
        res.status(200).send(user);
    }
    async userdelete(req: Request, res: Response) {
        const user: any = await userservice.userdelete(req.params.id);
        console.log("delete----->>>",user)
        res.status(200).send(user);
    }

}

// async updateuser(req:Request, res:Response) {
//     const user: any = req.body;
//     await userservice.updateuser(user);
//     try {
//         res.status(200).send({
//             message: "Successfully updated",
//              IsSuccess: true,
//              result: ""
//         });
//       } catch (e) {
//         res.status(404).send(e.message);
//       }
//   };

