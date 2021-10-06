<script>
    import users from '../stores/userStore.js'
    import profiles from '../stores/profileStore.js'

    import SuggestedProfile from './SuggestedProfile.svelte'
    import { onMount } from 'svelte'
    import { getUserById, getSuggestedProfiles } from '../services/firebase.js'
    import { followUser } from '../services/firebase.js'

    let followed = false

    $: if ($users) {
        onMount(async () => {
            const suggestedProfiles = await getSuggestedProfiles($users.uid)
            const result = suggestedProfiles.filter(profile =>
                profile.following.includes($users.uid).toString()
            )
            profiles.setProfile(result)
            console.log($users.uid)
        })
    }

    const followUserHandler = async event => {
        const profileId = event.detail
        followed = true
        if ($users) {
            await followUser($users.uid, profileId, false)
        }
    }
    $: if ($profiles) {
        console.log($profiles, 'profiles')
    }
</script>

<div class="rounded flex flex-col">
    {#if $profiles}
        <div class="text-sm flex items-center align-items justify-between mb-2">
            <p class="font-bold text-gray-base">Suggestions for you</p>
        </div>
        {#each $profiles as profile (profile.profileId)}
            <SuggestedProfile
                username={profile.username}
                profileId={profile.profileId}
                followed={profile.followed}
                on:follow-user={followUserHandler}
            />
        {/each}
    {/if}
</div>
