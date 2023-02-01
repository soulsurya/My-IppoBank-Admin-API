const AuthHandlerDTO = {};

AuthHandlerDTO.getBaseResponse = () => {
    return {
        success: true,
        data: {},
        message: ''
    }
}

AuthHandlerDTO.verifySignIn = (routerDTO) => {
    console.info(`In AuthHandlerDTO.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)}`);
    return { branchId: routerDTO?.branchId };

}

AuthHandlerDTO.verifySignUp = (routerDTO) => {
    console.info(`In AuthHandlerDTO.verifySignUp where routerDTO = ${JSON.stringify(routerDTO)}`);
    return {
        phoneNumber: routerDTO.phoneNumber,
        otp: routerDTO.otp
    };
}

AuthHandlerDTO.getToken = (userDetails) => {
    console.info(`In AuthHandlerDTO.getToken where userDetails = ${JSON.stringify(userDetails)}`);
    return {
        customerId: userDetails.customerId
    };
}

export default AuthHandlerDTO;