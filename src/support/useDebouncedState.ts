import { useState } from 'react'
import { useDebounce } from 'react-use'

export const useDebouncedState = <A>(initialState: A): [A, A, (a: A) => void] => {
  const [debouncedValue, setDebouncedValue] = useState(initialState)
  const [state, setState] = useState(initialState)

  useDebounce(() => setDebouncedValue(state), 500, [state])

  return [debouncedValue, state, setState]
}
