import Joi from 'joi';

const LoanSchema = {};

LoanSchema.payEmi = Joi.object().keys({
    transactionValue: Joi.string().required(),
    paymentMode: Joi.string().required(),
    loanId: Joi.string().required(),
});

LoanSchema.approve = Joi.object().keys({
    applicationId: Joi.string().required()
});

export default LoanSchema;