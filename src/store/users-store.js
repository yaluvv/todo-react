import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'

export const userStore = create(devtools((set, get) => ({
    currentUser: localStorageService.getCurrentUser() ? localStorageService.getCurrentUser() : null,
    loading: false,
    error: null,
    isAuth: !!localStorageService.getCurrentUser(),
    async register(payload) {
        try {
            set({ loading: true });

            const data = await authService.register(payload);
            set({
                currentUser: { email: data.email, _id: data.localId },
                isAuth: true,
            });
            return data
        } catch (error) {
            set({ error: error.response.data.error });
            return get().error;
        }
    },
    async login(payload) {
        try {
            set({ loading: true });

            const data = await authService.login(payload);
            set({
                currentUser: { email: data.email, _id: data.localId },
                isAuth: true,
            });
            return data
        } catch (error) {
            set({ error: error.response.data.error });
            return get().error;
        }
    },
    logout: () => {
        localStorageService.removeAuthData(),
            set({ isAuth: false, currentUser: null })
    }
})))
