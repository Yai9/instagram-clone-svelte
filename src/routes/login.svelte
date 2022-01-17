<script>
    import Input from '../UI/Input.svelte'

    import { firebase } from '../lib/firebase.js'
    import { validator } from '../helpers/validator.js'

    export let email = ''
    export let password = ''

    let error
    let isInvalid = true

    $: if (validator(email) || validator(password)) {
        isInvalid = true
    } else {
        isInvalid = false
    }

    const loginHandler = async event => {
        event.preventDefault()
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            location.pathname = '/'
        } catch (err) {
            error = err.message
        }
    }
</script>

<svelte:head>
    <title>Login - Instagram</title>
</svelte:head>

<section class="container flex mx-auto max-w-screen-md items-center h-screen">
    <div class="flex w-3/5">
        <img src="iphone-with-picture.png" alt="iphone-with-profile" />
    </div>
    <div>
        <div class="flex flex-col bg-white p-8 border border-gray-primary mb-4">
            <div class="flex justify-center w-full">
                <img src="logo.png" alt="instagram" class="mt-2 mb-4" />
            </div>
            <div>
                <form on:submit={loginHandler} method="POST">
                    <div>
                        {#if error}
                            <p class="text-red-500">{error}</p>
                        {/if}
                        <Input
                            type="email"
                            text={email}
                            customClass="text-sm text-gray-base w-72 mr-3 py-4 px-2 h-2 border border-gray-primary rounded mb-2"
                            label="E-mail"
                            placeholder="Phone number, username, or email"
                            on:input={event => (email = event.target.value)}
                            on:blur={() => (typed = true)}
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            text={password}
                            customClass="text-sm text-gray-base w-72 mr-3 py-4 px-2 h-2 border border-gray-primary rounded mb-2"
                            label="Password"
                            placeholder="Password"
                            on:input={event => (password = event.target.value)}
                            on:blur={() => (typed = true)}
                        />
                    </div>
                    <button
                        disabled={isInvalid}
                        class={`bg-blue-500 text-white w-72 rounded py-1 ${
                            isInvalid ? 'opacity-50' : 'opacity-100'
                        }`}>Log in</button
                    >
                </form>
            </div>
        </div>
        <div class="bg-white p-8 border border-gray-primary">
            <p class="">
                Don't have an account? <a
                    href="/signup"
                    class="text-blue-500 font-bold cursor-pointer hover:no-underline"
                    >Sign up</a
                >
            </p>
        </div>
    </div>
</section>
