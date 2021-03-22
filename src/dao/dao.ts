import mongoose from 'mongoose';
import { UserSchema, UserModel } from '../models/userModels';

const UserModel = mongoose.model('Student', UserSchema);
export class UserDao {
   
    async save(body: UserModel) {
        const user = new UserModel(body);
         return await user.save();
    }
    async getAll(body: UserModel){
        const User = UserModel.find({})
        return await User;
    }
    async getById(id: String){
        const user = UserModel.findOne({ _id: id })
        return await user;
    }
    async userUpdate(id:String, body: UserModel) {
        await UserModel.findByIdAndUpdate(id,body);
        const user = UserModel.findOne({ _id: id })
         return await user;
    }
    async userDelete(id: String){
        const user = UserModel.deleteOne({ _id: id });
        return await user;
    }
}

