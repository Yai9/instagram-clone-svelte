<script>
    export let type = 'text'
    export let text = ''
    export let customClass = ''
    export let label = ''
    export let placeholder = ''
</script>

{#if type === 'textarea'}
    <textarea
        {type}
        value={text}
        on:input
        on:blur
        class={customClass}
        aria-label={label}
        {placeholder}
    />
{:else}
    <input
        {type}
        value={text}
        on:input
        on:blur
        class={customClass}
        aria-label={label}
        {placeholder}
    />
{/if}
