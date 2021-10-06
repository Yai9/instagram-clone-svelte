<script>
    import Input from '../UI/Input.svelte'
    import { firebase } from '../lib/firebase.js'
    import { validator } from '../helpers/validator.js'
    import { doesUsernameExist } from '../services/firebase.js'

    export let email = ''
    export let fullname = ''
    export let username = ''
    export let password = ''
    export let followed = false

    let error
    let typed = false
    let customClass =
        'text-sm text-gray-base w-72 mr-3 py-5 px-2 h-2 border border-gray-primary rounded mb-2'

    let isInvalid = true

    $: if (
        validator(email) ||
        validator(password) ||
        validator(fullname) ||
        validator(username)
    ) {
        isInvalid = true
    } else {
        isInvalid = false
    }

    const signUpHandler = async event => {
        event.preventDefault()
        const fetchedUsername = await doesUsernameExist(username)
        if (!fetchedUsername.length) {
            try {
                const userResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                await userResult.user.updateProfile({ displayName: username })
                await firebase.firestore().collection('users').add({
                    userId: userResult.user.uid,
                    username: username.toLowerCase(),
                    fullname,
                    emailAddress: email.toLowerCase(),
                    followers: [],
                    following: [],
                    followed,
                    dateCreated: Date.now()
                })
                location.pathname = '/'
            } catch (err) {
                error = err.message
            }
        } else {
            error = 'Username is already taken.'
        }
    }
</script>

<svelte:head>
    <title>Sign Up - Instagram</title>
</svelte:head>

<section
    class="container flex mx-auto max-w-screen-md justify-center my-auto items-center h-screen"
>
    <div>
        <div
            class="flex flex-col items-center bg-white p-8 border border-gray-primary mb-4"
        >
            <div class="flex justify-center w-full ">
                <img
                    src="https://github.com/karlhadwen/instagram/blob/master/public/images/logo.png?raw=true"
                    alt="instagram"
                    class="mt-2 mb-4"
                />
            </div>
            <p class="w-64 text-center text-gray-400 text-xl font-bold mb-4">
                Sign up to see photos and videos from your friends.
            </p>
            <div id="form">
                <form on:submit={signUpHandler} method="POST">
                    <div class="flex flex-col mb-2">
                        {#if error}
                            <p class="text-red-500">{error}</p>
                        {/if}
                        <Input
                            type="email"
                            text={email}
                            {customClass}
                            label="E-mail"
                            placeholder="Mobile Number or Email"
                            on:input={event => (email = event.target.value)}
                        />
                        <Input
                            type="text"
                            text={fullname}
                            {customClass}
                            label="Full Name"
                            placeholder="Full Name"
                            on:input={event => (fullname = event.target.value)}
                        />
                        <Input
                            type="text"
                            text={username}
                            {customClass}
                            label="Username"
                            placeholder="Username"
                            on:input={event => (username = event.target.value)}
                        />
                        <Input
                            type="password"
                            text={password}
                            {customClass}
                            label="Password"
                            placeholder="Password"
                            on:input={event => (password = event.target.value)}
                        />
                    </div>
                    <button
                        disabled={isInvalid}
                        class={`bg-blue-500 text-white w-72 mb-4 rounded py-1 ${
                            isInvalid ? 'opacity-50' : 'opacity-100'
                        }`}>Sign up</button
                    >
                    <p class="w-72 text-center text-sm text-gray-500">
                        By signing up, you agree to our Terms , Data Policy and
                        Cookies Policy .
                    </p>
                </form>
            </div>
        </div>
        <div class="bg-white text-center p-8 mb-4 border border-gray-primary">
            <p class="">
                Have an account? <a
                    href="/login"
                    class="text-blue-500 font-bold cursor-pointer hover:no-underline"
                    >Log in</a
                >
            </p>
        </div>
        <p class="text-center">Get the app.</p>
        <div class="flex flex-row items-center mx-auto w-64 h-44">
            <a
                ><img
                    class="h-12 w-auto"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                /></a
            >
            <a
                ><img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                /></a
            >
        </div>
    </div>
</section>
