const config = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {},
    variants: {
        extend: {
            display: ['group-hover']
        }
    }
}

module.exports = config
