import { useCallback, useState } from "react"

export type UseArrayStateResult<A extends { id: string }> = {
  add: (a: A) => void
  remove: (a: A) => void
  clear: () => void
  items: ReadonlyArray<A>
}

export const useArrayState = <A extends { id: string }>(initialState: ReadonlyArray<A>): UseArrayStateResult<A> => {
  const [state, setState] = useState<ReadonlyArray<A>>(initialState)
  
  const add = useCallback((a: A): void => {
    setState((prev) => [...prev, a])
  }, [])

  const remove = useCallback((a: A): void => {
    setState((prev) => prev.filter((x) => x.id !== a.id))
  }, [])

  const clear = useCallback(() => {
    setState([])
  }, [])

  return {
    items: state,
    add,
    remove,
    clear
  }
}
