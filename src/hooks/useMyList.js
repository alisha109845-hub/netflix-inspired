import { useState, useEffect } from 'react'

export function useMyList() {
  const [myList, setMyList] = useState(() => {
    const stored = localStorage.getItem('myList')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList))
  }, [myList])

  function addToList(movie) {
    setMyList((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev
      return [...prev, movie]
    })
  }

  function removeFromList(movieId) {
    setMyList((prev) => prev.filter((m) => m.id !== movieId))
  }

  function isInList(movieId) {
    return myList.some((m) => m.id === movieId)
  }

  return { myList, addToList, removeFromList, isInList }
}