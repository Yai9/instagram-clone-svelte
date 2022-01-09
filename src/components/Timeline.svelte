<script>
    import users from '../stores/userStore.js'
    import UserPhotos from '../components/UserPhotos.svelte'
    import { onMount } from 'svelte'
    import { usePhotos } from '../hooks/usePhotos.js'
    import { likeUserPhoto } from '../services/firebase.js'

    let photoData
    let likesArray
    let liked = false

    onMount(async () => {
        photoData = await usePhotos()
        liked = await photoData.map(data => data.userLikedPhoto)
    })

    const likePhotoHandler = async event => {
        const photoId = event.detail

        if ($users && photoData) {
            likesArray = photoData.find(data => data.docId === photoId)
            likesArray.userLikedPhoto = !likesArray.userLikedPhoto
            liked = likesArray.userLikedPhoto
            await likeUserPhoto($users.uid, photoId, liked)
        }
    }
</script>

<div class="container col-span-2">
    {#if photoData}
        {#each photoData as photo (photo.photoId)}
            <UserPhotos
                photoId={photo.photoId}
                docId={photo.docId}
                username={photo.username}
                imageSrc={photo.imageSrc}
                caption={photo.caption}
                comments={photo.comments}
                likes={photo.likes}
                liked={photo.userLikedPhoto}
                on:like-user-photo={likePhotoHandler}
            />
        {/each}
    {/if}
</div>
