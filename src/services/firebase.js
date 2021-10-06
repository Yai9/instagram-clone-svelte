import { firebase, FieldValue } from '../lib/firebase.js'
import profiles from '../stores/profileStore.js'

export const doesUsernameExist = async username => {
    const fetchedUsername = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get()
    return fetchedUsername.docs.map(user => user.data().length > 0)
}

export const getUserById = async userId => {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get()
    const user = result.docs.map(item => ({
        ...item.data(),
        docId: item.id
    }))

    return user
}

export const getSuggestedProfiles = async userId => {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '!=', userId)
        .limit(10)
        .get()
    const profiles = result.docs.map(profile => ({
        ...profile.data(),
        profileId: profile.id,
        following: profile.data().following
    }))
    return profiles
}

export const followUser = async (userId, profileId, followed) => {
    let currentUserDocId
    const currentUser = await getUserById(userId)
    currentUser.map(data => (currentUserDocId = { docId: data.docId }))

    const followedProfile = await firebase
        .firestore()
        .collection('users')
        .doc(profileId)
        .get()
    const followedProfileId = { ...followedProfile.data() }

    await firebase
        .firestore()
        .collection('users')
        .doc(profileId)
        .update({
            followers: !followed
                ? FieldValue.arrayUnion(userId)
                : FieldValue.arrayRemove(userId),
            followed: !followed
        })
    if (currentUserDocId) {
        await firebase
            .firestore()
            .collection('users')
            .doc(currentUserDocId.docId)
            .update({
                following: !followed
                    ? FieldValue.arrayUnion(followedProfileId.userId)
                    : FieldValue.arrayRemove(followedProfileId.userId),
                followed: !followed
            })
    }
    const suggestedProfiles = await firebase
        .firestore()
        .collection('users')
        .where('userId', '!=', userId)
        .get()
    const updatedProfiles = suggestedProfiles.docs.map(profile => ({
        ...profile.data(),
        profileId: profile.id
    }))
    const result = [...updatedProfiles]
    profiles.setProfile(result)
    return result
}

export const getUserPhotos = async (userId, following) => {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', following)
        .get()

    const followedUserPhotos = result.docs.map(photo => ({
        ...photo.data(),
        docId: photo.id
    }))

    const followedUserPhotoWithDetails = await Promise.all(
        followedUserPhotos.map(async photo => {
            const user = await getUserById(photo.userId)
            const username = user.map(item => item.username)
		const result = [{...photo}]
		return { username, ...photo, ...photo.userLikedPhoto}
        })
    )
    return followedUserPhotoWithDetails 
}

export const likeUserPhoto = async (userId, profileId, liked) => {
	await firebase
        .firestore()
        .collection('photos')
        .doc(profileId)
        .update({
            likes: !liked
                ? FieldValue.arrayUnion(userId)
                : FieldValue.arrayRemove(userId), userLikedPhoto: !liked ? true : false})
    const userPhotosData = await firebase.firestore().collection('photos').get()
	const userPhotos = userPhotosData.docs.map(photo=>({
		...photo.data()
	}))
	return userPhotos

}
