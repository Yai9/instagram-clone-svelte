<script>
    import users from '../stores/userStore.js'
    import User from '../components/User.svelte'
    import Suggestions from '../components/Suggestions.svelte'
    import { getUserById } from '../services/firebase.js'
    import { onMount } from 'svelte'

    let user
    let username
    let fullname
    let id

    const useUser = async () => {
        if ($users) {
            user = await getUserById($users.uid)
            user.map(item => {
                username = item.username
                fullname = item.fullname
                id = item.userId
            })
            return user
        }
    }
    onMount(async () => {
        await useUser()
    })

    $: console.log(user, 'user')
</script>

<section class="p-4">
    {#if !user}
        <p>Loading...</p>
    {:else}
        <User {username} {fullname} {id} />
        <Suggestions />
    {/if}
</section>
