import { useEffect, useState } from "react"
import { getMonth, getDate, arrMonths } from "../helpers/fecha"
import Calendario from "../components/Calendario"
import useNotasStore from '../zustang/store'

export default function Months() {

  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  const [calendar, setCalendar] = useState([])

  const notas = useNotasStore(state=>state.notas)
  console.log(notas)

  useEffect(()=>{

    const {month, year} = getDate()
    setMonth(month)
    setYear(year)

  },[])

  useEffect(()=>{
    setCalendar(getMonth(month, year))
  },[month])

  const handleNext = () => {
    
    if (month === 11) {
      setMonth(0)
      setYear(year+1)
    }else(
      setMonth(month+1)
    )
    
  }
  const handlePrev = () => {
    
    if (month === 0) {
      setMonth(11)
      setYear(year-1)
    }else(
      setMonth(month-1)
    )
    
  }


  return (
    <div>
      <div className="flex justify-between p-2 bg-neutral-100">
        <button className="p-2 hover:bg-neutral-200" onClick={handlePrev}>menos</button>
        <h2 className="p-2">{arrMonths[month]} de {year}</h2>
        <button className="p-2 hover:bg-neutral-200" onClick={handleNext}>mas</button>
      </div>
      <Calendario calendar={calendar} data={notas} />
    </div>
  )
}
