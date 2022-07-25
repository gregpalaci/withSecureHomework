export const state = () => ({
  notes: [],
})

export const getters = {
  getNotes: (state) => {
    return state.notes
  },
  notesStatuses: (state) => {
    return state.notes.filter(({ status }) => status)
  },
}

export const actions = {
  async fetchNotes(state) {
    // make request
    const res = await this.$http
      .$get('http://localhost:3001/notes')
      .catch((e) => console.log(e))
    state.notes = res
    return res
  },
  async createNote(state, payload) {
    const res = await this.$http
      .$post('http://localhost:3001/note', payload)
      .catch((e) => console.log(e))
    state.notes = res
    return res
  },
}
