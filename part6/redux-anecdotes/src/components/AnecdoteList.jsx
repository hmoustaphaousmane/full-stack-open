import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    // create a copy of `anecdotes` before sorting to avoid mutating the original state
    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes) // order by the number of votes
    if (filter === '')
      return sortedAnecdotes
    return sortedAnecdotes.filter(anecdote => anecdote.content.includes(filter))
  })
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => {
              dispatch(vote(anecdote.id))
              dispatch(setNotification(`You voted ${anecdote.content}`))
              }}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList