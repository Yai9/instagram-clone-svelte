import { writable } from 'svelte/store'
import { firebase, FieldValue } from '../lib/firebase.js'

const userStore = writable(null)

const customUserStore = {
    subscribe: userStore.subscribe,
    setUser: data => {
        userStore.set(data)
    },
    updateUser: data => {
        userStore.update(user => {
            const updatedUser = { ...data, ...user }
            return updatedUser
        })
    },
    removeUser: () => {
        userStore.update(data => {
            const prevData = [...data]
            return prevData.pop()
        })
    }
}

export default customUserStore
