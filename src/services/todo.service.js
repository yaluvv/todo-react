import httpService from "./http.service";
import { transformData } from "./http.service";

const todoEndpoint = 'todos/'

const todoService = {
    create: async (payload) => {
        const { data } = await httpService.put(todoEndpoint + payload.id, payload)
        return data
    },

    fetchTodos: async (userId) => {
        const { data } = await httpService.get(todoEndpoint, {
            params: { orderBy: `"userId"`, equalTo: `"${userId}"` },
        });
        const newData = transformData(data)
        return newData;
    },
    removeTodo: async (id) => {
        const { data } = await httpService.delete(todoEndpoint + id)
        return data
    },
    updateTodo: async (payload) => {
        const { data } = await httpService.patch(todoEndpoint + payload._id, payload)
        return data
    }

}

export default todoService;