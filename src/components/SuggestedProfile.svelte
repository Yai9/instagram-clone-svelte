<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let username
    export let profileId
    export let followed

    const followUser = () => {
        dispatch('follow-user', profileId)
    }
</script>

{#if !followed}
    <div
        class="flex row items-center align-items justify-between p-3"
        id={profileId}
    >
        <div class="flex items-center justify-between">
            <a href={`/profile/${username}`}
                ><img
                    src={`${username}.jpg`}
                    class="rounded-full w-16 h-16 mr-3"
                    alt={username}
                /></a
            >
            <p class="py-4 font-bold text-sm">{username}</p>
        </div>
        <button on:click={followUser} class="text-sm font-bold text-blue-500"
            >{followed ? 'Unfollow' : 'Follow'}</button
        >
        <p class="text-gray-400">Follows you</p>
    </div>
{/if}
