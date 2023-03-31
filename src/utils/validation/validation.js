import { validationSchema } from "./schemas/validationSchema"

export const validation = async (data) => {
    try {
        await validationSchema.validate(data)
    } catch (error) {
        return { [error.path]: error.message }
    }
}