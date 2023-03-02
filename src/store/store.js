import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { getTime } from '../utils/getTime';

const initialState = [
    {
        id: nanoid(),
        content: "Test0",
        created_at: "12:20",
        checked: false,
    },
    {
        id: nanoid(),
        content: "Test1",
        created_at: "12:20",
        checked: false,
    },

];

export const useTodoStore = create((set, get) => ({
    todos: initialState,
    loading: false,
    error: null,
    addTodo: (value) => {
        set({ loading: true })

        const newTodo = { id: nanoid(), content: value, created_at: getTime(), checked: false }

        setTimeout(() => {
            set({ todos: [...get().todos, newTodo] })
            set({ loading: false })
        }, 3000)
    },
    removeTodo: (id) => {
        set({ todos: get().todos.filter(item => item.id !== id) })
    },
    editTodo: (id, value) => {
        set({ todos: get().todos.map(item => item.id === id ? { ...item, content: value } : item) })
    },
    checkTodo: (id) => {
        set({ todos: get().todos.map(item => item.id === id ? { ...item, checked: !item.checked } : item) })
    },
    removeCheckedTodos: () => {
        set({ todos: get().todos.filter(item => !item.checked) })
    },
}))