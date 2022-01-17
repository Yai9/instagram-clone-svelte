<script>
    import App from '../components/App.svelte'

    import users from '../stores/userStore'

    import { UserAuthListener } from '../hooks/userAuthListener'
    import { onMount } from 'svelte'
    import { firebase, FieldValue } from '../lib/firebase.js'

    onMount(() => {
        setTimeout(() => {
            UserAuthListener()
            if (!$users) {
                location.pathname = '/login'
            }
            loaded = true
        }, 1000)
    })
</script>

<svelte:head>
    <title>Instagram</title>
</svelte:head>

<section><App {firebase} {FieldValue} /></section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>
