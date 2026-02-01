import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/../public/logo.svg'

export function Header() {
    return (
       <header className="w-full bg-[#24292E] hidden md:block xl:block">
          <div className='flex flex-col justify-center mx-auto max-w-317.25 h-18  text-white'>
            <Link href="/">
              <Image alt='logo' src={Logo} />
            </Link>
          </div>
       </header>
    )
}