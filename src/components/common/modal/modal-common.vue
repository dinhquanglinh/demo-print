<template>
  <div class="modal fade in modal-active">
    <div class="modal-dialog" :class="{'modal__custom': isClassModalCustom}">
      <div class="modal-content">
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isClassModalCustom: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_modal.scss';
</style>
