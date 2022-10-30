import Faixa from './Faixa.js'
import Preview from './Preview.js'
import Descricao from './Descricao.js'

export default function Material() {
  return (
    <div className='flex flex-wrap justify-evenly'>
      <Faixa/>
      <Preview/>
      <Descricao/>
    </div>
  )
}
