import Mainsection from './components/MainSection'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center'>
        <input type='text' className='mt-5' placeholder='Procurar um carro' />
      </div>
      <Mainsection />
    </div>
  )
}
