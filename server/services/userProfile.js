import axios from "axios";

const UserProfileService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

UserProfileService.getUserAccountsByBranchId = async (branchId) => {
    try {
        console.info(`In AuthenticationService.getUserAccountsByBranchId where branchId = ${branchId}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/user/getByBranchId");
        url.search = new URLSearchParams({ branchId }).toString();
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.getUserAccountsByBranchId throwing an error with message = ${error.message} where branchId = ${branchId}`);
        throw error;
    }
}

UserProfileService.createTransaction = async (payload) => {
    try {
        console.info(`In AuthenticationService.createTransaction where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/transaction/create");
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.createTransaction throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

export default UserProfileService;