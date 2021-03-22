import { UserDao } from "../dao/dao";
import { UserModel } from "../models/userModels";

let userDao: UserDao;
export class UserService {
   
    constructor() {
        userDao = new UserDao();
    }
  
    async userCreate(body: UserModel) {
        return await userDao.save(body);
    }
    async userRead(id:String) {
        // console.log('inside the id----->', id)
        return await userDao.getById(id);
    }
    async userReadAll(body: UserModel) {
        return await userDao.getAll(body);
    }
    async userUpdate(id:String,body: UserModel) {
        // console.log('inside the id----->')
        return await userDao.userUpdate(id,body);
    }
    async userDelete(id:String) {
        return await userDao.userDelete(id);
    }
}