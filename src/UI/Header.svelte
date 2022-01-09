<script>
    import users from '../stores/userStore.js'
    import profiles from '../stores/profileStore.js'
    import { onMount } from 'svelte'
    import { UserAuthListener } from '../hooks/userAuthListener.js'
    import { firebase } from '../lib/firebase.js'
    import { page } from '$app/stores'

    import SearchContainer from '../UI/SearchContainer.svelte'
    import Loader from './Loader.svelte'

    let searchValue = ''
    let searchResults
    const profileQuery = $page.path.includes('profile')

    $: console.log(profileQuery,'profileQuery')

    onMount(async () => {
        await UserAuthListener()
    })

    $: console.log($profiles, 'users')

    const searchUsersHandler = event => {
        searchValue = event.target.value
        searchResults = $profiles.filter(user =>
            user.username.toLowerCase().includes(searchValue.toLowerCase())
        )
        console.log(searchResults, 'profilesResult')
        return searchResults
    }

    $: console.log($profiles, 'profiles')
</script>

<svelte:head>
    <title>Instagram</title>
</svelte:head>

{#if !$users}
    <Loader />
{:else}
    <header
        class="h-16 bg-white w-full border-b border-gray-primary mb-8 sticky top-0"
    >
        <div class="container mx-auto max-w-screen-lg h-full">
            <div class="flex justify-between h-full">
                <div
                    class="text-gray-700 text-center flex items-center align-items cursor-pointer"
                >
                    <h1 class="flex justify-center w-full">
                        <a href="/" aria-label="Instagram logo">
                            <img
                                src="../../static/logo.png"
                                alt="Instagram"
                                class="mt-2 w-5/6"
                            />
                        </a>
                    </h1>
                </div>
                {#if !profileQuery}
                <div
                    class="w-full text-gray-700 text-center flex items-center align-items cursor-pointer"
                >
                    <input
                        type="search"
                        placeholder="Search"
                        class="border-2 border-gray-200 rounded text-center"
                        value={searchValue}
                        on:input={searchUsersHandler}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        class="float-left -ml-40 text-gray-500"
                        stroke="currentColor"
                        ><path
                            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                        /></svg
                    >
                    {#if searchValue !== '' && searchValue !== null}
                        <div class="mt-36 w-3/6 h-full shadow-md">
                            <SearchContainer {searchResults} />
                        </div>
                    {/if}
                </div>
                {/if}
                <div
                    class="text-gray-700 text-center flex items-center align-items"
                >
                    {#if $users}
                        <a href="/">
                            <svg
                                class="w-8 mr-6 text-black-light cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </a>

                        <button
                            type="button"
                            title="Sign Out"
                            onClick={() => {
                                firebase.auth().signOut()
                                location.pathname = '/login'
                            }}
                            onKeyDown={event => {
                                if (event.key === 'Enter') {
                                    firebase.auth().signOut()
                                    location.pathname = '/login'
                                }
                            }}
                        >
                            <svg
                                class="w-8 mr-6 text-black-light cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </button>
                        {#if $users}
                            <div class="flex items-center cursor-pointer">
                                <a
                                    href={$users &&
                                        `/profile/${$users.displayName}`}
                                >
                                    <img
                                        class="rounded-full h-8 w-8 flex"
                                        src={`../../static/${$users.displayName}.jpg`}
                                        alt={`${$users.displayName} profile`}
                                        onError={e => {
                                            e.target.src = DEFAULT_IMAGE_PATH
                                        }}
                                    />
                                </a>
                            </div>

                            <a href="/">
                                <button
                                    type="button"
                                    class="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                                >
                                    Log In
                                </button>
                            </a>
                            <a href="signup">
                                <button
                                    type="button"
                                    class="font-bold text-sm rounded text-blue-medium w-20 h-8"
                                >
                                    Sign Up
                                </button>
                            </a>
                        {/if}
                    {/if}
                </div>
            </div>
        </div>
    </header>
{/if}
