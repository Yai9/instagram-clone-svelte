<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import App from '../components/App.svelte'
    import { firebase, FieldValue } from '../lib/firebase.js'

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
