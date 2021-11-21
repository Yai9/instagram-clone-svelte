<script context="module">
    import { firebase } from '../../lib/firebase.js'

    export async function load({ page }) {
        let pageId = page.params.id
        const user = await firebase
            .firestore()
            .collection('users')
            .where('username', '==', pageId)
            .get()

        const fetchedUser = await user.docs.map(item => ({
            ...item.data(),
            id: item.data().username
        }))
        const result = await fetchedUser.find(user => user.id === pageId)

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
        username={result.username}
        fullName={result.fullName}
        followers={result.followers}
        following={result.following}
    />
{/if}
