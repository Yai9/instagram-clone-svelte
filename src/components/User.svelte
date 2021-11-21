<script>
    export let username
    export let fullname
    export let id
</script>

<div class="grid grid-cols-4 gap-4 mb-6 max-w-screen-lg mx-auto">
    <div class="inline items-center justify-between col-span-1">
        <a href={`/profile/${username}`}
            ><img
                src={`${username}.jpg`}
                class="rounded-full w-16 h-16 flex mr-3"
                alt="profile"
            /></a
        >
    </div>
    <div class="col-span-3 my-auto">
        <p class="font-bold">{username}</p>
        <p>{fullname}</p>
    </div>
</div>
