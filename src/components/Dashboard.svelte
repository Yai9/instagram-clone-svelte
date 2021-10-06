<script>
    import users from '../stores/userStore.js'
    import Header from '../UI/Header.svelte'
    import Timeline from '../components/Timeline.svelte'
    import Sidebar from '../UI/Sidebar.svelte'
    import { useUser } from '../hooks/useUser.js'
    import { getUserById } from '../services/firebase.js'
    import { onMount } from 'svelte'
</script>

<svelte:head>
    <title>Instagram</title>
</svelte:head>

<div class="bg-gray-50 ">
    <Header />
    {#if $users}
        <div
            class="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"
        >
            <Timeline />
            <Sidebar />
        </div>
    {/if}
</div>
