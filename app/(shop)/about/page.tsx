import type { Metadata } from 'next'
import PageTitle from '@/app/components/PageTitle'


const PAGETITLE = 'About Us'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE + ' | ABRA Test App',
  }
}

export default async function Page() {

  return (
    <main className='w-full px-6'>
      <PageTitle title={PAGETITLE} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mx-auto text-slate-700 dark:text-slate-200'>
        About Us Page
      </div>
    </main>
  )
}
