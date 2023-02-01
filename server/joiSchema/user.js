import Joi from 'joi';

const UserSchema = {}

UserSchema.createTransaction = Joi.object().keys({
    customerId: Joi.string().required(),
    accountId: Joi.string().required(),
    transactionValue: Joi.string().required(),
    transactionType: Joi.string().required(),
    paymentMode: Joi.string().required(),
    branchId: Joi.string().required(),
});


export default UserSchema;