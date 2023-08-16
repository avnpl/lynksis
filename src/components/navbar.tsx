import { FunctionalComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { StateContext } from '../app'

export const Navbar: FunctionalComponent = ({}) => {
  const state = useContext(StateContext)
  if (!state) return null

  const { isLoggedIn } = state

  return (
    <div>
      {isLoggedIn ? <h2>User is logged in</h2> : <h2>User not logged in</h2>}
    </div>
  )
}
