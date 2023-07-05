'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex w-full min-h-[250px] justify-center items-center'>
      <div className='text-center'>

      <h2 className='text-2xl text-slate-500 mb-6'>Something went wrong!</h2>
      <button
       className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        >
        Try again!
      </button>
        </div>
    </div>
  )
}