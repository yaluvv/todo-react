import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export const validationSchema = yup.object().shape({
    password: yup.string().required().password(),
    email: yup.string().required().email(),
});