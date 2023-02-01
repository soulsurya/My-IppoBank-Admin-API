import constants from '../constants.js';
import AdminProfileService from '../services/adminProfile.js';
import AuthenticationService from "../services/authentication.js";
import AuthHandlerDTO from './dto/auth.js';
import lodash from "lodash";

const AuthHandler = {};

AuthHandler.generateOtp = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.generateOtp where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = await AuthenticationService.generateOtp(routerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.generateOtp where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

AuthHandler.verifySignIn = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse()
        let otpVerification = await AuthenticationService.verifyOtp(routerDTO);
        let userDetails = await AdminProfileService.getUserByPhoneNumber(routerDTO.phoneNumber);
        if (lodash.isEmpty(userDetails)) {
            handlerResponse.success = false;
            handlerResponse.message = constants.CUSTOM_MESSAGES[103]
        } else {
            let handlerDTO = AuthHandlerDTO.verifySignIn(userDetails)
            handlerResponse.data.token = await AuthenticationService.generateToken(handlerDTO)
        }
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

export default AuthHandler;