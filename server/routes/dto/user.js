const UserRouterDTO = {};

UserRouterDTO.makeTransaction = (request, branchId) => {
    console.info(`Inside UserRouterDTO.createUser where request = ${JSON.stringify(request)} and branchId = ${branchId}`);
    return {
        customerId: request.customerId,
        accountId: request.accountId,
        transactionValue: request.amount,
        transactionType: request.transactionType,
        paymentMode: request.transactionMode,
        branchId: request.branchId
    };
}

export default UserRouterDTO;