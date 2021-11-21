<script>
    import users from '../stores/userStore.js'
    import profiles from '../stores/profileStore.js'
    import UserPhotos from '../components/UserPhotos.svelte'
    import { onMount } from 'svelte'
    import { usePhotos } from '../hooks/usePhotos.js'
    import { getUserById, likeUserPhoto } from '../services/firebase.js'

    let photoData
    let likesArray
    let liked = false
    let userLikedPhoto = false

    onMount(async () => {
        let data
        photoData = await usePhotos()
        liked = photoData.map(data => data.userLikedPhoto)
    })
    $: console.log(liked, 'liked0')

    const likePhotoHandler = async event => {
        liked = photoData.map(data => data.userLikedPhoto)
        const photoId = event.detail
        liked = !liked
        console.log(liked, 'liked1')
        if ($users && photoData) {
            //likesArray = photoData.find(data => data.docId === photoId)

            await likeUserPhoto($users.uid, photoId, liked)
        }
    }

    $: console.log(photoData, 'photodata2')
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
