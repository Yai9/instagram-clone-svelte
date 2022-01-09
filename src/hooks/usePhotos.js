import users from '../stores/userStore.js'
import profiles from '../stores/profileStore.js'
import { getUserPhotos, getUserById } from '../services/firebase'

export const usePhotos = async () => {
    let data
    let followedUserPhotos = []
    let photos;

    const result = await users.subscribe(item => {
        data = item
    })
    result()

    const getTimelinePhotos = async () => {
        const currentUser = await getUserById(data.uid)
        const userId = currentUser.map(user => user.userId)
        const following = currentUser.map(user => user.following)


        if (following.length > 0) {
            followedUserPhotos = await getUserPhotos(...userId, ...following)
            photos = followedUserPhotos.map(photo => ({
                ...photo,
                following
            }))
        }
    }
    await getTimelinePhotos()

    console.log(photos, 'photoresult')

    return photos
}
