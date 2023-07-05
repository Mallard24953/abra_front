export default function PageTitle({ title }:{ title:string}) {
return (
  <>
    <div className="my-6">
      <h1 className="text-3xl text-slate-600 ">{title}</h1>
    </div>
  </>
)
}