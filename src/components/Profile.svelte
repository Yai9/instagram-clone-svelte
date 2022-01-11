<script>
    import Header from '../UI/Header.svelte'
    import users from '../stores/userStore'
    import profiles from '../stores/profileStore'

    import { onMount } from 'svelte'
    import {
        followUser,
        getUserById,
        displayProfilePhotos
    } from '../services/firebase'

    export let profileId
    export let username
    export let fullName
    export let followers
    export let following
    export let followed

    let currentUserdocId
    let profilePhotos = []

    onMount(async () => {
        const data = await getUserById($users.uid)
        data.map(user => (currentUserdocId = user.docId))
    })

    onMount(async () => {
        const data = await displayProfilePhotos(profileId)
        profilePhotos = data.map(photo => ({
            ...photo
        }))
        console.log(profilePhotos, 'displayedPhotosData')
    })

    $: isMyProfile = $users.uid === profileId
    $: isProfileFollowed = followed
    $: isButtonToggled = false

    $: docId = !isMyProfile
        ? $profiles.find(profile => profile.userId === profileId).profileId
        : currentUserdocId

    const toggleFollowButtonHandler = () => {
        isButtonToggled = !isButtonToggled
    }

    const userFollowHandler = async () => {
        const res = await followUser($users.uid, docId, false)
        const data = res.find(profile => profile.profileId === docId)
        isProfileFollowed = data.followed
        followers = data.followers.length
        isButtonToggled = false
        console.log(res, 'res')
        return res
    }

    const userUnfollowHandler = async () => {
        const res = await followUser($users.uid, docId, true)
        const data = res.find(profile => profile.profileId === docId)
        isProfileFollowed = data.followed
        followers = data.followers.length
        return res
    }

    $: console.log(docId, 'docId')
    $: console.log($users, 'currUser')
</script>

<svelte:head>
    <title>{username}</title>
</svelte:head>

<Header />
<div class="grid justify-center">
    <div style="width:750px">
        <div class="flex justify-between w-full mb-8">
            <img
                class="rounded-full"
                style="width:150px; height:150px"
                src={`../../static/${username}.jpg`}
            />
            <section class="flex flex-col w-3/6">
                <div class="flex justify-center">
                    <p class="font-bold text-2xl mr-8">{username}</p>
                    <div class="grid ml-auto mr-auto">
                        <div class="flex">
                            <button
                                class={`px-4 ${
                                    isProfileFollowed || isMyProfile
                                        ? 'bg-white'
                                        : 'bg-blue-600 text-white border-2 border-blue-700 px-11'
                                } bg-white border-2 border-gray-200 rounded max-h-8 font-bold`}
                                on:click={userFollowHandler}
                                >{isMyProfile
                                    ? 'Edit Profile'
                                    : isProfileFollowed
                                    ? 'Following'
                                    : 'Follow'}</button
                            >
                            {#if isProfileFollowed}
                                <button
                                    class="flex bg-white border-2 border-gray-200 rounded w-8 justify-center max-h-8 font-bold"
                                    on:click={toggleFollowButtonHandler}
                                >
                                    v
                                </button>
                            {/if}
                        </div>
                        {#if isButtonToggled && isProfileFollowed}
                            <button
                                class="flex bg-white border-2 border-gray-200 rounded w-38 justify-center max-h-8 font-bold"
                                on:click={userUnfollowHandler}
                            >
                                Unfollow
                            </button>
                        {/if}
                    </div>

                    <svg
                        aria-label="Options"
                        class="mt-1 ml-auto mr-auto"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                        ><path
                            clip-rule="evenodd"
                            d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                            fill-rule="evenodd"
                        /></svg
                    >
                </div>
                <div class="flex justify-between list-none relative mt-12 ">
                    <li>{profilePhotos.length} posts</li>
                    <li>{followers} followers</li>
                    <li>{following.length} following</li>
                </div>
            </section>
        </div>
        <div>
            <nav class="flex justify-center border-t-2 border-gray-200 ">
                <ul
                    class="grid grid-cols-3 gap-10 uppercase font-bold text-gray-400 py-3"
                >
                    <li>Posts</li>
                    <li>Saved</li>
                    <li>Tagged</li>
                </ul>
            </nav>
            <div class="flex gap-3">
                {#if profilePhotos.length > 0}
                    {#each profilePhotos as photo}
                        <img
                            class="w-64 h-64"
                            src={`../../static/${photo.imageSrc}`}
                            alt={photo.caption}
                        />
                    {/each}
                {:else if profilePhotos.length === 0}
                    <div class="flex justify-center ml-auto mr-auto">
                        <p>There are no photos to be displayed.</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
