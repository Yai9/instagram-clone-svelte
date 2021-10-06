<script>
    import users from '../stores/userStore.js'
    import UserPhotos from '../components/UserPhotos.svelte'
    import { onMount } from 'svelte'
    import { usePhotos } from '../hooks/usePhotos.js'
    import { likeUserPhoto } from '../services/firebase.js'

    let photoData
    let liked = false

    onMount(async () => {
        photoData = await usePhotos()
        console.log(photoData, 'photoData')
    })

    const likePhotoHandler = async event => {
        if ($users && photoData) {
            const photoId = event.detail
            await likeUserPhoto($users.uid, photoId, liked)
        }
        photoData = await usePhotos()
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
                userLikedPhoto={photo.userLikedPhoto}
                on:like-user-photo={likePhotoHandler}
            />
        {/each}
    {/if}
</div>
