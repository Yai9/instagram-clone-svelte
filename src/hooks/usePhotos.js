import users from '../stores/userStore.js'
import profiles from '../stores/profileStore.js'
import { getUserPhotos, getUserById } from '../services/firebase'

export const usePhotos = async () => {
    let data
    const result = await users.subscribe(item => {
        data = item
    })
    result()

    const currentUser = await getUserById(data.uid)
    const userId = currentUser.map(user => user.userId)
    const following = currentUser.map(user => user.following)

    const followedUserPhotos = await getUserPhotos(userId, ...following)
    const photos = followedUserPhotos.map(photo => ({
        ...photo
    }))
    console.log(photos, 'photoresult')
    console.log(following, 'following')
    console.log(userId, 'photosuserid')
    return photos
}
