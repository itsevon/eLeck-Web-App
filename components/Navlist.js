import React from 'react'
import Link from 'next/link'

const Navlist = () => {
  return (
    <div>
      <div>
        <nav href='/'>
          <img src='/images/eleck-logo.png' className='h-10 m-6 ml-10 mb-24' alt='logo' />
        </nav>
        {/* <ul>
          <li>
            <Link href='/home'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default Navlist