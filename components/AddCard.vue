<template>
  <form class="card border my-6" @submit.prevent="createNote()">
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
</template>
<script>
export default {
  name: 'AddCard',
  data() {
    return {
      title: '',
      content: '',
      note: {},
    }
  },
  methods: {
    async createNote() {
      if (!this.title.length || !this.content.length) return
      const { title, content } = this
      const notesResult = await this.$store.dispatch('createNote', {
        title,
        content,
      })
      this.note = notesResult
      await this.$store.dispatch('fetchNotes')
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
