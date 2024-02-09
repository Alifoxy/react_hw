import Joi from "joi";


export const carValidator = Joi.object({
    brand:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'brand can only contain letters and must be from 1 to 100 characters'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'string.pattern.base':'price can only be number from 0 to 1000000'
    }),
    year:Joi.number().min(1990).max(2024).required().messages({
        'string.pattern.base':'year can only be number from 1990 to current year'
    })
});