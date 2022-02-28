import React from 'react'
import Link from 'next/link'
const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'
import { IPost } from '../models/post'

type Props = {}

export default function about({}: Props) {
  return (
    <div>
      about
      <Link href="/">
          <a>Home</a>
        </Link>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const posts: IPost[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}