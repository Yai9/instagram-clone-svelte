<script context="module">
    import { firebase } from '../../lib/firebase.js'

    export async function load({ page }) {
        let pageId = page.params.id

        try {
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
        } catch (err) {
            const error = err.message
            return { props: { error } }
        }
    }
</script>

<script>
    import Profile from '../../components/Profile.svelte'

    export let result
    export let error
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
    <p>{error}</p>
{/if}
