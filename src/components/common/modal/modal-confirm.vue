<template>
  <div class="modal fade in modal-active">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Please confirm delete item {{id+1}} !
        </div>
        <div class="modal-footer">
          <button @click="$emit('close')" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button @click="$emit('delete', id)" type="button" class="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '~ThemePath/scss/common/_modal.scss';
</style>
