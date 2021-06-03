<template>
    <i
        type="button"
        :data-toggle="toggle"
        :data-target="target"
        :aria-controls="controls"
        :aria-expanded="expanded"
        :aria-label="label"
    ></i>
</template>

<script>
export default {
    name: 'IconToggler',
    props: {
        toggle: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: true
        },
        controls: {
            type: String,
            required: true
        },
        expanded: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
</style>