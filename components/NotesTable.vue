<template>
  <div class="container">
    <b-table :data="notes" :columns="columns"></b-table>
    <form class="w-4/12 card border my-6" @submit.prevent="createNote()">
      <div class="card-content">
        <p class="title is-4">Add note</p>
        <div class="my-3">
          <div>Title:</div>
          <input v-model="title" name="title" type="text" class="border" />
        </div>
        <div class="content my-3">
          <div>Content:</div>
          <textarea v-model="content" class="border"></textarea>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NotesTable',
  data() {
    return {
      title: '',
      content: '',
      note: {},
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
    const notesResult = await this.$store.dispatch('fetchNotes')
    this.notes = notesResult
  },
  methods: {
    async createNote() {
      if (!this.title.length || !this.content.length) return
      const { title, content } = this
      const notesResult = await this.$store.dispatch('createNote', {
        title,
        content,
      })
      this.notes.push(notesResult)
      this.title = ''
      this.content = ''
    },
  },

  computed: {
    counter() {
      return this.$store.state.counter
    },
  },
}
</script>
