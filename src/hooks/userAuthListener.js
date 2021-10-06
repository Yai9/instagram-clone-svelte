import users from '../stores/userStore.js'
import { firebase } from '../lib/firebase.js'
import { onMount, onDestroy } from 'svelte'

export const UserAuthListener = () => {
    const listener = firebase.auth().onAuthStateChanged(authState => {
        if (authState) {
            localStorage.setItem('users', JSON.stringify(authState))
            users.setUser({ ...authState })
        } else {
            localStorage.removeItem('users')
            users.removeUser()
        }
    })

    return () => listener()
}
