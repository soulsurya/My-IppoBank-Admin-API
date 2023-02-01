import UserLoanService from "../services/loan.js";
import UserProfileService from "../services/userProfile.js";
import UserHandlerDTO from "./dto/user.js";

const UserHandler = {};

UserHandler.getUserDetails = async (customerId) => {
    try {
        console.info(`In UserHandler.getUserDetails where customerId = ${customerId}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        let userData = await UserProfileService.getUserByCustomerId(customerId);
        let userLoans = await UserLoanService.getLoansByCustomerId(customerId);
        handlerResponse.data = UserHandlerDTO.getUserDetailsResponse(userData, userLoans);
        return handlerResponse
    } catch (error) {
        console.error(`In UserHandler.getUserDetails throwing an error with message = ${error.message}  where customerId = ${customerId}`);
        throw error;
    }
}

UserHandler.createTransaction = async (routerDTO) => {
    try {
        console.info(`In UserHandler.createTransaction where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        handlerResponse.data = await UserProfileService.createTransaction(routerDTO);
        return handlerResponse
    } catch (error) {
        console.error(`In UserHandler.createTransaction throwing an error with message = ${error.message}  where routerDTO = ${JSON.stringify(routerDTO)}`);
        throw error;
    }
}

UserHandler.getUserDetailsByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In UserHandler.getUserDetailsByPhoneNumber where phoneNumber = ${phoneNumber}`);
        return await UserProfileService.getUserByPhoneNumber(phoneNumber);
    } catch (error) {
        console.error(`In UserHandler.getUserDetailsByPhoneNumber throwing an error with message = ${error.message}  where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}

export default UserHandler;