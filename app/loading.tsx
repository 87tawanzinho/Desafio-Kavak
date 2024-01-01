export default function Loading() {
  return (
    <div className='mt-20 flex flex-col justify-center items-center gap-4'>
      <img
        src='https://thumbs.dreamstime.com/b/het-bedrijfsconcept-bedrijfsvrouw-die-de-banner-houden-huurt-me-73893545.jpg'
        alt='hire me'
        className='h-40 w-40'
      />
      <div className='animate-pulse flex flex-col items-center gap-4 w-60'>
        <div>
          <div className='w-48 h-6 bg-slate-400 rounded-md'></div>
          <div className='w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md'></div>
        </div>
        <div className='h-7 bg-slate-400 w-full rounded-md'></div>
        <div className='h-7 bg-slate-400 w-full rounded-md'></div>
        <div className='h-7 bg-slate-400 w-full rounded-md'></div>
        <div className='h-7 bg-slate-400 w-1/2 rounded-md'></div>
      </div>
    </div>
  )
}
