import type { CancelTokenSource } from 'axios'
import { defineStore } from 'pinia'

interface State {
  cancelSource: CancelTokenSource | null
}
export const useRequestStore = defineStore({
  id: 'request',
  state: (): State => ({
    cancelSource: null,
  }),

  actions: {
    setCancelSource(source) {
      this.cancelSource = source
    },
    cancelRequest() {
      // this.cancelSource?.cancel()
      // this.cancelSource = null
    },

  },
})
