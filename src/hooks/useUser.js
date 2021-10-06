import users from '../stores/userStore.js'
import { getUserById } from '../services/firebase.js'
import { onDestroy } from 'svelte'

export const useUser = async () => {
    const user = await users.subscribe(item => ({
        id: item.uid
    }))

    console.log(user, 'userrr')
}
