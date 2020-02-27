import express from 'express';
import { signupController, signupVerifyController } from '../controllers';
import signupValidator from '../validations/signup';
import signupVerifyMiddleware from '../middlewares/signupVerify';
//import UserController from '../../controllers/userController';




const authRouter = express.Router();


authRouter.post('/signup', signupValidator,
    signupController);

authRouter.put(
  '/verify/:token',
  signupVerifyMiddleware,
  signupVerifyController
);







export default authRouter;