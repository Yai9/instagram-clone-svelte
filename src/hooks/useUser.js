import users from '../stores/userStore.js'

export const useUser = async () => {
    const user = await users.subscribe(item => ({
        id: item.uid
    }))

    console.log(user, 'userrr')
}
