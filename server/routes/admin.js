import Router from 'express-promise-router';
import constants from '../constants.js';
import AdminProfileHandler from '../handler/admin.js';
import AuthenticationService from '../services/authentication.js';
import Utils from '../utils.js'

const router = Router();

router.get("/", async function (req, res) {
    try {
        let branchId = await AuthenticationService.validateToken(req.headers.authorization)
        let result = await AdminProfileHandler.getUserDetails(branchId);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in get admin/ with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})


export default router;