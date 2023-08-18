import { ActionFunction, Form, redirect, useActionData } from 'react-router-dom'
import { z } from 'zod'
import { SERVERURL } from '../utils'

export const registerAction: ActionFunction = async ({ request }) => {
  const url = SERVERURL + '/register'
  const body = await request.formData()

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: body.get('username'),
        email: body.get('email'),
        password: body.get('password'),
      }),
    })

    if (res.status === 201) {
      return redirect('/')
    } else if (res.status === 400) {
      return { code: 400, message: 'Username or Email already in use' }
    }
  } catch (err) {
    console.log(err)
  }
  return { code: 888, message: 'Unknown error has occurred' }
}

export const Register = () => {
  const parsedActionRes = z
    .object({
      code: z.number(),
      message: z.string(),
    })
    .safeParse(useActionData())

  return (
    <div>
      <Form method="post" action="/register">
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button type="submit">Submit</button>
      </Form>
      {parsedActionRes.success ? <p>{parsedActionRes.data.message}</p> : null}
    </div>
  )
}
