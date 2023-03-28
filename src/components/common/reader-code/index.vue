<template>
    <div>
        <button v-on:click="onButtonClick">Tìm thiết bị Bluetooth</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        onButtonClick() {
            window.print()
        },
    },
}
</script>
