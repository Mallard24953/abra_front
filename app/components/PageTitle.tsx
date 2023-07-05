import MyCart from "../(shop)/components/MyCart"

export default function PageTitle({ title }: { title: string }) {
  return (
      <div className='my-6 flex justify-between'>
        <h1 className='text-3xl text-slate-600 '>{title}</h1>
          <MyCart />
      </div>
  )
}
