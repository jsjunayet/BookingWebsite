

export function SkeletonCard() {
  return (
    <div className="flex flex-col animate-pulse space-y-3 border md:w-[270px] w-full p-2 ">
     <div>
     <div className="h-[225px]  w-full relative bg-slate-200 md:w-[250px] rounded-xl">
     <div className={'absolute h-6 w-12 p-1 px-4  rounded-md bg-slate-300  border top-5 left-3'}></div>
        <div className='absolute rounded-full bg-slate-300 top-4 right-3 size-9' />
        <div className='absolute  rounded-full bg-slate-300 top-16 right-3 size-9' />
        <div className='absolute  rounded-full bg-slate-300 top-28 right-3 size-9' />
     </div>
     </div>
      <div className="space-y-2">
        <div className="h-4 w-[200px] bg-slate-300" />
        <div className="h-4 w-[120px] bg-slate-300" />
        <div className="h-4 w-[140px] bg-slate-300" />
      </div>
    </div>
  )
}


