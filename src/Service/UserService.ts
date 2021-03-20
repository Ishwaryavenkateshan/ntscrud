import { userdao } from "../dao/dao";
import { UserModel } from "../models/userModels";

let user: userdao;
export class UserService {
   
    constructor() {
        user = new userdao();
    }
  
    async usercreate(body: UserModel) {
        return await user.save(body);
    }
    async userread(id:String) {
        // console.log('inside the id----->', id)
        return await user.getById(id);
    }
    async userreadall(body: UserModel) {
        return await user.getall(body);
    }
    async userupdate(id:String,body: UserModel) {
        // console.log('inside the id----->')
        return await user.userupdate(id,body);
    }
    async userdelete(id:String) {
        return await user.findByIdAndDelete(id);
    }
}

// async userupdate(body: UserModel) {
//     return await user.put(body);}
    
// async userdelete(id:String) {
//         return await user.findByIdAndDelete(id);
// }
// }
