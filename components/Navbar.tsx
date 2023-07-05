import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full top-0 z-10'>
      <nav
        className='mx-auto flex items-center justify-between p-6 bg-slate-950  bg-opacity-90'
        aria-label='Global'
      >
        <div className='flex'>
          <Link href={'/'} className=''>
            <span className='text-xl font-semibold text-slate-100'>
              ABRA Test App
            </span>
          </Link>
        </div>
        <div className='flex space-x-4 ml-10'>
          <Link href={'/'}>
            <button
              type='button'
              className='inline-flex items-center rounded-md  px-3 py-2 text-md font-medium leading-4 text-slate-400 hover:text-slate-200  hover:bg-slate-200/10 focus:outline-none'
            >
              Home
            </button>
          </Link>
          <Link href={'/'}>
            <button
              type='button'
              className='inline-flex items-center rounded-md  px-3 py-2 text-md font-medium leading-4 text-slate-400 hover:text-slate-200  hover:bg-slate-200/10 focus:outline-none'
            >
              About Us
            </button>
          </Link>
          <Link href={'/'}>
            <button
              type='button'
              className='inline-flex items-center rounded-md  px-3 py-2 text-md font-medium leading-4 text-slate-400 hover:text-slate-200  hover:bg-slate-200/10 focus:outline-none'
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className='flex-1'></div>
        <div className=''></div>
      </nav>
    </div>
  )
}
