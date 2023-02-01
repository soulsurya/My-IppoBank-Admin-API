import AdminProfileService from "../services/adminProfile.js";
import UserLoanService from "../services/loan.js";
import UserProfileService from "../services/userProfile.js";
import UserHandlerDTO from "./dto/user.js";

const AdminProfileHandler = {};

AdminProfileHandler.getUserDetails = async (branchId) => {
    try {
        console.info(`In AdminProfileHandler.getUserDetails where branchId = ${branchId}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        let branchDetails = await AdminProfileService.getUserByBranchId(branchId);
        let accounts = await UserProfileService.getUserAccountsByBranchId(branchId)
        let loans = await UserLoanService.getLoansByBranchId(branchId)
        handlerResponse.data = { branchDetails, loans, accounts }
        return handlerResponse;
    } catch (error) {
        console.error(`In AdminProfileHandler.getUserDetails throwing an error with message = ${error.message}  where branchId = ${branchId}`);
        throw error;
    }
}

AdminProfileHandler.getUserDetailsByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In AdminProfileHandler.getUserDetailsByPhoneNumber where phoneNumber = ${phoneNumber}`);
        return await UserProfileService.getUserByPhoneNumber(phoneNumber);
    } catch (error) {
        console.error(`In AdminProfileHandler.getUserDetailsByPhoneNumber throwing an error with message = ${error.message}  where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}

export default AdminProfileHandler;