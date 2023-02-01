import axios from "axios";

const AdminProfileService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

AdminProfileService.getUserByBranchId = async (branchId) => {
    try {
        console.info(`In AdminProfileService.getUserByBranchId where branchId = ${branchId}`);
        let url = new URL(process.env.ADMIN_PROFILE_SERVICE_BASE_API_URL + "/admin/getUserById");
        url.search = new URLSearchParams({ branchId }).toString();
        headers.Authorization = process.env.ADMIN_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AdminProfileService.getUserByBranchId throwing an error with message = ${error.message} where branchId = ${branchId}`);
        throw error;
    }
}

AdminProfileService.getUserByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In AuthenticationService.getUserByPhoneNumber where phoneNumber = ${phoneNumber}`);
        let url = new URL(process.env.ADMIN_PROFILE_SERVICE_BASE_API_URL + "/admin/getUserByNumber");
        url.search = new URLSearchParams({ phoneNumber }).toString();
        headers.Authorization = process.env.ADMIN_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.getUserByPhoneNumber throwing an error with message = ${error.message} where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}

export default AdminProfileService;