import { ReactElement } from 'react'

export interface IMeta {
  title: string
  description?: string
  image?: string
  children: ReactElement
}
