import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { getTime } from '../utils/getTime';
import todoService from '../services/todo.service';
import localStorageService from '../services/localStorage.service';


export const useTodoStore = create((set, get) => ({
    todos: [],
    loading: false,
    error: null,
    fetchTodos: async (userId) => {
        set({ loading: true })
        try {
            const data = await todoService.fetchTodos(userId)

            set({ loading: false, todos: data })
        } catch (error) {
            console.error(error);
            set({ error: error.message })
        }

    },
    addTodo: async (value) => {
        if (value !== '') {
            set({ loading: true })

            const newTodo = { id: nanoid(), content: value, created_at: getTime(), checked: false, userId: localStorageService.getUserId() }

            const data = await todoService.create(newTodo)
            set((state) => ({
                ...state,
                loading: false,
                todos: state.todos.length > 0 ? [...state.todos, data] : [data]
            }
            ))
        }
    },
    removeTodo: async (id) => {
        await todoService.removeTodo(id)

        set({ todos: get().todos.filter(item => item.id !== id) })
    },
    editTodo: async (id, value) => {
        await todoService.updateTodo({ _id: id, content: value })
        set({ todos: get().todos.map(item => item.id === id ? { ...item, content: value } : item) })
    },
    checkTodo: (id) => {
        set({ todos: get().todos.map(item => item.id === id ? { ...item, checked: !item.checked } : item) })
    },
    removeCheckedTodos: async () => {
        const completedTodos = get().todos.filter(item => item.checked)

        await Promise.all(completedTodos.map(todo => todoService.removeTodo(todo.id)))
        set({ todos: get().todos.filter(item => !item.checked) })
    },
}))
