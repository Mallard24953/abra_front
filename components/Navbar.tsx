import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full top-0 z-10'>
      <nav
        className='mx-auto flex items-center justify-between p-6 bg-slate-950  bg-opacity-90'
        aria-label='Global'
      >
        <div className='flex flex-1'>
          <a  className=''>
            <span className='text-xl font-semibold text-slate-100'>
              ABRA Test App
            </span>
          </a>
        </div>
        <div className="flex space-x-4 ">
          <Link 
            href={'/'}
            className={'text-slate-400 hover:text-slate-200'}
            >
              Home
          </Link>
          <Link 
            href={'/cart'}
            className={'text-slate-400 hover:text-slate-200'}
            >
              Cart
          </Link>
        </div>
      </nav>
    </div>
  )
}
