import { createPinia } from 'pinia'
import piniaPluginPersistedstate from './pinia-plugin-persistedstate'

const store = createPinia()
store.use(piniaPluginPersistedstate)

export default store

export { defineStore, storeToRefs } from 'pinia'

declare module 'pinia' {
  interface DefineStoreOptionsBase<S extends StateTree, Store> {
    /**
     * Persist store in storage
     * @see https://prazdevs.github.io/pinia-plugin-persistedstate
     */
    persist?: boolean
  }
  interface PiniaCustomProperties {
    /**
     * Hydrate store from configured storage
     * Warning: this is for advances usecases, make sure you know what you're doing
     */
    $hydrate: (opts?: {
      runHooks?: boolean
    }) => void
    /**
     * Persist store into configured storage
     * Warning: this is for advances usecases, make sure you know what you're doing
     */
    $persist: () => void
  }
}
