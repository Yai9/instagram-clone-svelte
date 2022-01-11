<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let photoId
    export let docId
    export let username
    export let imageSrc
    export let caption
    export let comments
    export let likes = []
    export let liked

    const likePhotoHandler = async () => {
        dispatch('like-user-photo', docId)
        liked = !liked
    }
</script>

<div class="container col-span-2 bg-white">
    <div class="border-2 border-gray-200 pb-24 mt-6">
        <div class="flex items-center py-4 px-3">
            <a href={`/profile/${username}`}>
                <img
                    src={`${username.map(item => item)}.jpg`}
                    class="w-10 rounded-full"
                />
            </a>
            <p class="font-bold px-3">
                {username.map(item => item)}
            </p>
        </div>
        <div class="border-2 border-gray-100 flex justify-center">
            <div style="max-height:900px">
                <img src={imageSrc} alt={imageSrc} />
            </div>
        </div>
        <div class="py-4 px-3 mx-3">
            <div class="flex justify-start mb-3">
                <div>
                    <svg
                        aria-label="Like"
                        class="mr-2 cursor-pointer "
                        color={liked ? 'rgb(237, 73, 86)' : '#262626'}
                        fill={liked ? 'rgb(237, 73, 86)' : '#262626'}
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                        stroke="currentColor"
                        on:click={likePhotoHandler}
                    >
                        {#if liked}
                            <path
                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                            />
                        {:else}
                            <path
                                d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                            />
                        {/if}
                    </svg>
                </div>
                <svg
                    aria-label="Comment"
                    class="mx-2 cursor-pointer"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                    ><path
                        clip-rule="evenodd"
                        d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                        fill-rule="evenodd"
                    /></svg
                ><svg
                    aria-label="Share Post"
                    class="mx-2 cursor-pointer"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                    ><path
                        d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
                    /></svg
                >
            </div>
            <div class="mb-3">
                <p>
                    <span class="font-bold"> {username.map(item => item)}</span>
                    {caption}
                </p>
            </div>
            <div>
                {#each comments as comment}
                    <p>
                        <span class="font-bold">{comment.displayName}</span>
                        {comment.comment}
                    </p>
                {/each}
            </div>
        </div>
    </div>
</div>
