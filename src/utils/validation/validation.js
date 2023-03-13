import { validationSchema } from "./schemas/validationSchema"

export const validation = async (data, set) => {
    try {
        await validationSchema.validate(data)
        set({})
    } catch (error) {
        set({ [error.path]: error.message })
    }
}