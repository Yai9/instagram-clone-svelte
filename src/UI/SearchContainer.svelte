<script>
    export let searchResults
</script>

<div class="w-full h-full">
    <div class="w-full bg-white" style="height: 30vh;">
        {#if searchResults}
            {#each searchResults as result (result.userId)}
                <div
                    class="flex justify-between flex-row py-4 px-4 items-center"
                >
                    <div class="flex flex-row items-center">
                        <a href={`/profile/${result.username}`}>
                        <img
                            class="w-12 h-12 rounded-full"
                            src={result.username + '.jpg'}
                            alt={result.username + '.jpg'}
                        />
                    </a>
                        <p class="px-2 font-bold">{result.username}</p>
                    </div>
                    <span>x</span>
                </div>
            {/each}
        {/if}
    </div>
</div>
