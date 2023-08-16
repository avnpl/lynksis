import { Signal, batch, signal } from '@preact/signals'
import { createContext } from 'preact'
import './app.css'
import { Navbar } from './components/navbar'
import { Categories, Category, Opt, SERVERURL } from './utils'

const createInitialState = () => {
  const categories = signal<Opt<Category[]>>(null)
  const isLoggedIn = signal(false)
  const isLoading = signal(true)

  ;(async function () {
    const handleError = () => {
      localStorage.clear()
      console.log('Clearing local storage...')
      batch(() => {
        categories.value = null
        isLoggedIn.value = false
        isLoading.value = false
      })
    }

    const token = localStorage.getItem('token')
    if (token) {
      const url = SERVERURL + '/userdata'
      await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then((res) => res.json())
        .then((data) => Categories.parse(data.categories))
        .then((cats) => {
          batch(() => {
            categories.value = cats
            isLoggedIn.value = true
            isLoading.value = false
          })
        })
        .catch((err) => {
          console.log(err)
          handleError()
        })
    } else handleError()
  })()

  return { categories, isLoggedIn, isLoading }
}

type MyContext = {
  categories: Signal<Opt<Category[]>>
  isLoggedIn: Signal<boolean>
}

const { categories, isLoggedIn, isLoading } = createInitialState()
export const StateContext = createContext<MyContext | null>(null)

export function App() {
  const bruh = signal('')
  return (
    <StateContext.Provider value={{ isLoggedIn, categories }}>
      <div className="app">{isLoading.value ? 'Loading' : 'Hello World'}</div>
      {bruh}
      <br />
      <Navbar />
    </StateContext.Provider>
  )
}
