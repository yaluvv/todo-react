import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().password(),
});