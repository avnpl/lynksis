import { Signal, batch, signal } from '@preact/signals'
import { createContext } from 'preact'
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './app.css'
import { Cats } from './components/category'
import { ErrorComponent } from './components/error'
import { Login, loginAction } from './components/login'
import { Navbar } from './components/navbar'
import { Register, registerAction } from './components/register'
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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
        errorElement={<ErrorComponent />}
      >
        <Route errorElement={<ErrorComponent />}>
          <Route path="login" element={<Login />} action={loginAction} />
          <Route
            path="register"
            element={<Register />}
            action={registerAction}
          />
          <Route path="cats" element={<Cats />} />
        </Route>
      </Route>
    )
  )

  return (
    <StateContext.Provider value={{ isLoggedIn, categories }}>
      <div className="app">{isLoading.value ? 'Loading' : 'Hello World'}</div>
      <br />
      <RouterProvider router={router} />
    </StateContext.Provider>
  )
}
