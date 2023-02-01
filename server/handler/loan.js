import UserLoanService from "../services/loan.js";
import UserLoanHandlerDTO from "./dto/loan.js";

const UserLoanHandler = {};

UserLoanHandler.approveLoan = async (loanDetails) => {
    try {
        console.info(`In UserLoanHandler.approveLoan where loanDetails = ${JSON.stringify(loanDetails)}`);
        let handlerResponse = UserLoanHandlerDTO.getBaseResponse();
        handlerResponse.data = await UserLoanService.approveLoan(loanDetails);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserLoanHandler.approveLoan throwing an error with message = ${error.message}  where loanDetails = ${JSON.stringify(loanDetails)}`);
        throw error;
    }
}

UserLoanHandler.payLoanEmi = async (paymentDetails) => {
    try {
        console.info(`In UserLoanHandler.payLoanEmi where paymentDetails = ${JSON.stringify(paymentDetails)}`);
        let handlerResponse = UserLoanHandlerDTO.getBaseResponse()
        handlerResponse.data = await UserLoanService.payLoanEmi(paymentDetails);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserLoanHandler.payLoanEmi throwing an error with message = ${error.message}  where paymentDetails = ${JSON.stringify(paymentDetails)}`);
        throw error;
    }
}

export default UserLoanHandler;