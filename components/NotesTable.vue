<template>
  <div v-if="notes.length">
    <b-table :data="notes" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  name: 'NotesTable',
  data() {
    return {
      notes: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          numeric: true,
          sortable: true,
        },
        {
          field: 'title',
          label: 'Title',
          sortable: true,
        },
        {
          field: 'content',
          label: 'Content',
          sortable: true,
        },
        {
          field: 'status',
          label: 'Status',
          sortable: true,
        },
      ],
    }
  },
  async fetch() {
    this.notes = await this.$http.$get('http://localhost:3001/notes')
  },
}
</script>
