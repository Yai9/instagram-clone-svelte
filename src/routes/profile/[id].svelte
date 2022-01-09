<script context="module">
    import { firebase } from '../../lib/firebase.js'

    export async function load({ page }) {
        let pageId = page.params.id

        console.log(pageId)

        const user = await firebase
            .firestore()
            .collection('users')
            .where('username', '==', pageId)
            .get()

        const fetchedUser = user.docs.map(item => ({
            ...item.data(),
            id: item.data().username
        }))
        const result = fetchedUser.find(user => user.id === pageId)

        return { props: { result } }
    }
</script>

<script>
    import Profile from '../../components/Profile.svelte'
    export let result

    $: console.log(result, 'result')
</script>

<svelte:head>
    <title>Instagram - Profile</title>
</svelte:head>

{#if result}
    <Profile
        profileId={result.userId}
        username={result.username}
        fullName={result.fullName}
        followers={result.followers.length}
        following={result.following}
        followed={result.followed}
    />
{:else}
    <p>Loading...</p>
{/if}
