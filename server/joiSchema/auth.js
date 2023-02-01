import Joi from 'joi';

const AuthJoiSchema = {}

AuthJoiSchema.generateOtp = Joi.object().keys({
    phoneNumber: Joi.string().required()
});

AuthJoiSchema.verifySignIn = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    otp: Joi.string().required()
});

export default AuthJoiSchema;