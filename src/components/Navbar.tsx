import { NAVBAR_HEIGHT } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

import { navbarData as nd } from '@/lib/constants'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl" style={{ height: `${NAVBAR_HEIGHT}px` }}>
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">

        {/* BAL OLDAL */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src={nd.logoSrc}
                alt="Rentful Logo"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                {nd.titleLeftPiece}
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  {nd.titleRightPiece}
                </span>
              </div>
            </div>
          </Link>
          <p className="text-primary-200 hidden md:block">
            {nd.desc}
          </p>
        </div>

        {/* JOBB OLDAL */}
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
            >
              {nd.signIn}
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="secondary"
              className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
            >
              {nd.signOut}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar