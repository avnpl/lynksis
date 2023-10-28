import { ActionFunction, Form, redirect, useActionData } from 'react-router-dom'
import { z } from 'zod'
import { SERVERURL } from '../utils'

export const loginAction: ActionFunction = async ({ request }) => {
  const url = SERVERURL + '/login'
  const body = await request.formData()

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: body.get('username'),
        password: body.get('password'),
      }),
    })

    if (res.status === 200) {
      return redirect('/')
    } else {
      const temp = await res.json()
      return temp.message
    }
  } catch (err) {
    console.log(err)
  }
  return 'Unknown error has occurred'
}

export const Login = () => {
  const parsedActionRes = z.string().safeParse(useActionData())

  return (
    <div>
      <Form method="post" action="/login">
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </Form>
      {parsedActionRes.success ? <p>{parsedActionRes.data}</p> : null}
    </div>
  )
}
