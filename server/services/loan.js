import axios from "axios";

const UserLoanService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

UserLoanService.getLoansByBranchId = async (branchId) => {
    try {
        console.info(`In UserLoanService.getLoansByBranchId where branchId = ${branchId}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/admin/getByBranchId");
        url.search = new URLSearchParams({ branchId }).toString();
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserLoanService.getLoansByBranchId throwing an error with message = ${error.message} where branchId = ${branchId}`);
        throw error;
    }
}

UserLoanService.approveLoan = async (payload) => {
    try {
        console.info(`In UserLoanService.approveLoan where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/admin/approve");
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserLoanService.approveLoan throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

UserLoanService.payLoanEmi = async (payload) => {
    try {
        console.info(`In UserLoanService.payLoanEmi where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/admin/payEmi");
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserLoanService.payLoanEmi throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}


export default UserLoanService;