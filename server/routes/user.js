import Router from 'express-promise-router';
import Utils from '../utils.js'
import AuthenticationService from '../services/authentication.js';
import UserSchema from '../joiSchema/user.js';
import UserRouterDTO from './dto/user.js';
import UserHandler from '../handler/user.js';
import constants from '../constants.js';

const router = Router();

router.post("/createTransaction", async function (req, res) {
    try {
        let { error } = UserSchema.createTransaction.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let branchId = await AuthenticationService.validateToken(req.headers.authorization)
        let routerDTO = UserRouterDTO.makeTransaction(req.body, branchId);
        let result = await UserHandler.createTransaction(routerDTO);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/get with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;