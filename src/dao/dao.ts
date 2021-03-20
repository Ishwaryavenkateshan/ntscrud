import mongoose from 'mongoose';
import { UserSchema, UserModel } from '../models/userModels';

const UserModel = mongoose.model('Student', UserSchema);
export class userdao {
   
    async save(body: UserModel) {
        const user = new UserModel(body);
         return await user.save();
    }
    async getall(body: UserModel){
        const User = UserModel.find({})
        console.log('inside the get getall=========>>>>>>>>', User)
        return await User;
    }
    async getById(id: String){
        const user = UserModel.findOne({ _id: id })
        console.log("i>>>>d",user)
        return await user;
    }
    async userupdate(id:String, body: UserModel) {
        await UserModel.findByIdAndUpdate(id,body);
        const user = UserModel.findOne({ _id: id })
         return await user;
    }
    async findByIdAndDelete(id: String){
        const user = UserModel.deleteOne({ _id: id });
        console.log("i>>>>d",user)
        return await user;
    }
}
//     async findByIdAndDelete(id:String){
//         const User = new UserModel(id);
//         //return await User;
//     }
// }
// findIndex(d => d.id === id);
