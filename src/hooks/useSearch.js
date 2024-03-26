import { useState, useEffect, useRef } from 'react'

export default function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    const newSearch = search
    if (isFirstInput.current) {
      isFirstInput.current = newSearch === ''
      return
    }

    if (newSearch === '') {
      setError('Search term is required')
      return
    }

    if (newSearch.length < 3) {
      setError('Search term is too short')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSearch }
}