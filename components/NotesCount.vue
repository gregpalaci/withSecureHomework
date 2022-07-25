<template>
  <div class="container">
    <div>Total: {{ statuses.length }}</div>
  </div>
</template>

<script>
export default {
  name: 'NotesCount',
  data() {
    return {
      notes: [],
    }
  },
  computed: {
    statuses() {
      return this.notes.length ? this.notes.map(({ status }) => status) : 0
    },
    // newStatuses() {
    // TODO
    //   return this.statuses ? this.statuses.map((status) => status === 'New') : 0
    // },
  },
  async beforeMount() {
    const notesResult = await this.$store.dispatch('fetchNotes')
    this.notes = notesResult
  },
}
</script>
