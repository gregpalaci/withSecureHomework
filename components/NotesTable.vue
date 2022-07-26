<template>
  <div class="container">
    <b-table :data="getNotes" :columns="columns"></b-table>
    <AddCard></AddCard>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NotesTable',

  data() {
    return {
      title: '',
      content: '',
      notes: [],
      // getNotes: [],
      // notes: [],
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
    this.notes = await this.$store.dispatch('fetchNotes')
  },
  computed: {
    ...mapGetters({ getNotes: 'getNotes' }),
    counter() {
      return this.$store.state.counter
    },
  },
  methods: {
    async createNote() {
      if (!this.title.length || !this.content.length) return
      const { title, content } = this
      await this.$store.dispatch('createNote', {
        title,
        content,
      })
      this.title = ''
      this.content = ''
    },
  },
}
</script>
