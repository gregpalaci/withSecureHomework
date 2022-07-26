export const state = () => ({
  notes: [],
})

export const mutations = {
  setNotes(state, value) {
    state.notes = value
  },
  addNotes(state, value) {
    state.notes = [...state.notes, value]
  },
}

export const getters = {
  getNotes: (state) => {
    return state.notes
  },
  notesStatuses: (state) => {
    return state.notes.filter(({ status }) => status)
  },
}

export const actions = {
  async fetchNotes({ state, commit }) {
    const res = await this.$http
      .$get('http://localhost:3001/notes')
      .catch((e) => console.log(e))

    commit('setNotes', res)
    return res
  },
  async createNote({ state, commit }, payload) {
    const res = await this.$http
      .$post('http://localhost:3001/note', payload)
      .catch((e) => console.log(e))
    commit('addNotes', res)
    return res
  },
}
