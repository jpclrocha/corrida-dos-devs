import '../../Stylesheets/LandingPage/Card.css'

export default function Card(props) {
    const texto = () =>{
        var texto1 = props.texto
        var verde = props.verde
        var texto2 = props.texto2
        return <h1 className='text-left text-2xl mb-2 font-bold leading-7'>{texto1} <span className='text-verde'>{verde}</span> {texto2}</h1>
      }
    
      const btnVazado = () => {
        if (props.botao === "vazado") {
          return <button type="button" className="card-btn-vazado">{props.btnTxt}</button>
        } else {
          return <button type="button" className="card-btn">{props.btnTxt}</button>
        }
      }
    
      return (
        <div className="h-60 w-[30vw] p-[2vw] bg-branco rounded-xl shadow-lg">
          {texto()}
          <p className='text-sm mb-2'>{props.textoPqn}</p>
          {btnVazado()}
        </div>
  )
}
