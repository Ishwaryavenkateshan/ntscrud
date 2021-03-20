import cors from 'cors';
import express from 'express';
import { MongoConfig } from './config/MongoConfig'
import { userRouter }from './routes/UserRoutes';
import bodyParser  from 'body-parser';

const app: express.Application = express();
const ruser = new userRouter();
app.use(cors());
app.use(bodyParser.json());
ruser.userRouter(app);
new MongoConfig();
app.get('/', (req, res) => {
    res.send({status: "Success"});
});
app.listen(4000, () => {
    console.log('Server running on port 4000');
});
