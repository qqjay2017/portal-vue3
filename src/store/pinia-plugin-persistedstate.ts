// @ts-ignore
// @ts-nocheck
// src/index.ts
import { destr } from 'destr'

// src/runtime/core.ts
import { deepOmitUnsafe, deepPickUnsafe } from 'deep-pick-omit'

function hydrateStore(store, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit,
  beforeHydrate,
  afterHydrate,
}, context, runHooks = true) {
  try {
    if (runHooks)
      beforeHydrate && beforeHydrate(context)
    const fromStorage = storage.getItem(key)
    if (fromStorage) {
      const deserialized = serializer.deserialize(fromStorage)
      const picked = pick ? deepPickUnsafe(deserialized, pick) : deserialized
      const omitted = omit ? deepOmitUnsafe(picked, omit) : picked
      store.$patch(omitted)
    }
    if (runHooks)
      afterHydrate && afterHydrate(context)
  }
  catch (error) {
    if (debug)
      console.error('[pinia-plugin-persistedstate]', error)
  }
}
function persistState(state, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit,
}) {
  try {
    const picked = pick ? deepPickUnsafe(state, pick) : state
    const omitted = omit ? deepOmitUnsafe(picked, omit) : picked
    const toStorage = serializer.serialize(omitted)
    storage.setItem(key, toStorage)
  }
  catch (error) {
    if (debug)
      console.error('[pinia-plugin-persistedstate]', error)
  }
}
function createPersistence(context, optionsParser) {
  const { pinia, store, options: { persist } } = context
  if (!persist)
    return
  if (!(store.$id in pinia.state.value)) {
    const originalStore = pinia._s.get(store.$id.replace('__hot:', ''))
    if (originalStore)
      Promise.resolve().then(() => originalStore.$persist())
    return
  }
  const persistenceOptions = Array.isArray(persist) ? persist : persist === true ? [{}] : [persist]
  const persistences = persistenceOptions.map(optionsParser)
  store.$hydrate = ({ runHooks = true } = {}) => {
    persistences.forEach((p) => {
      hydrateStore(store, p, context, runHooks)
    })
  }
  store.$persist = () => {
    persistences.forEach((p) => {
      persistState(store.$state, p)
    })
  }
  persistences.forEach((p) => {
    hydrateStore(store, p, context)
    store.$subscribe(
      (_mutation, state) => persistState(state, p),
      { detached: true },
    )
  })
}

// src/index.ts
function createPersistedState(options = {}) {
  return function (context) {
    createPersistence(context, p => ({
      key: (options.key ? options.key : x => x)(p.key || context.store.$id),
      debug: false,
      serializer: {
        serialize: data => JSON.stringify(data),
        deserialize: data => destr(data),
      },
      storage: window.sessionStorage,
      beforeHydrate: p.beforeHydrate,
      afterHydrate: p.afterHydrate,
      pick: p.pick,
      omit: p.omit,
    }))
  }
}
const src_default = createPersistedState()
export {
  createPersistedState,
  src_default as default,
}
