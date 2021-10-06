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
    export let result
</script>

<svelte:head>
    <title>{result && result.username}</title>
</svelte:head>
<div>
    {#if result}
        <p>{result.username}</p>
    {/if}
</div>
