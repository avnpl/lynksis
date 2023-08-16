import { z } from 'zod'

export type Opt<T> = T | null

export type Lynk = z.infer<typeof Lynk>
export const Lynk = z.object({
  title: z.string(),
  link: z.string().url(),
  _id: z.string().optional(),
})

export type Category = z.infer<typeof Category>
export const Category = z.object({
  name: z.string(),
  lynks: Lynk.array(),
  _id: z.string().optional(),
})

export const Categories = z.array(Category)

export type User = z.infer<typeof User>
export const User = z.object({
  _id: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  categories: Category.array(),
  __v: z.number().optional(),
})

export type JWTUser = z.infer<typeof JWTUser>
export const JWTUser = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
})

export type ResUser = z.infer<typeof ResUser>
export const ResUser = z.object({
  user: User,
  token: z.string(),
})

export const SERVERURL = import.meta.env.VITE_DEVSERVER
