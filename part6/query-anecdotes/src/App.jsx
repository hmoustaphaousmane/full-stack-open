import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes, voteAnecdote } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isPending)
    return <div>Loading...</div>

  if (result.isError)
    return <div>anecdote service not available du to problem in server</div>

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
