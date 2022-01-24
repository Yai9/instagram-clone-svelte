import { writable } from 'svelte/store'

const profileStore = writable(null)

const customProfileStore = {
    subscribe: profileStore.subscribe,
    setProfile: data => {
        profileStore.set(data)
    },
    updateProfile: (id, data) => {
        profileStore.update(profile => {
            const updatedProfile = {
                ...profile.find(item => item.id === id),
                ...data
            }
            const profileIndex = profile.findIndex(p => p.id === id)
            const profileArray = [...profile]
            profileArray[profileIndex] = updatedProfile
            return profileArray
        })
    },
    removeProfile: () => {
        profileStore.update(data => {
            const prevData = [...data]
            return prevData.pop()
        })
    }
}

export default customProfileStore
