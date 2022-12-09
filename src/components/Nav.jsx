import React from 'react'
import {Link} from 'wouter'

export default function Nav() {
  return (
    <nav className='flex'>
      <Link href='/'>
        <a className='p-2'>Meses</a>
      </Link>
      <Link href='/days'>
        <a className='p-2'>Dias</a>
      </Link>
    </nav>
  )
}
