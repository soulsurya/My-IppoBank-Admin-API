const LoanRouterDTO = {};

LoanRouterDTO.approveLoan = (request) => {
    console.info(`Inside LoanRouterDTO.approveLoan where request = ${JSON.stringify(request)}`);
    return request
}

LoanRouterDTO.payLoanEmi = (request) => {
    console.info(`Inside LoanRouterDTO.payLoanEmi where request = ${JSON.stringify(request)}`);
    return {
        transactionValue: Number(request.transactionValue),
        paymentMode: request.paymentMode,
        loanId: request.loanId,
    }
}


export default LoanRouterDTO;