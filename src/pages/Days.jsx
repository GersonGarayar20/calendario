import { useEffect, useState } from 'react'
import Form from '../components/Form'
import { getDate, arrDays, arrMonths } from '../helpers/fecha'
import useNotasStore from '../zustang/store';

export default function Days({params}) {

  const notas = useNotasStore(state=>state.notas)

  const [hoy, setHoy] = useState()

  useEffect(()=>{
    
    params.day
    ? setHoy(getDate(params))
    : setHoy(getDate())
      
  },[params])

  return (
    <div>
      <div className='p-2 bg-neutral-100'>
        <h2 className='p-2'>{arrDays[hoy?.weekday]} {hoy?.day} de {arrMonths[hoy?.month]} de {hoy?.year}</h2>
      </div>
      <ul>
        {
          hoy && notas.map(nota=>{
            if (nota.day === hoy.day && nota.month === hoy.month && nota.year === hoy.year) {
              return (<li>{nota.content}</li>)
            }
          })
        }
      </ul>
      <Form />
    </div>
  )
}
