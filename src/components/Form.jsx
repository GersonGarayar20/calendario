import {useState} from 'react'
import useNotasStore from '../zustang/store'
import {nanoid} from 'nanoid'
import {getDate} from '../helpers/fecha'

const initialState = {
  title:"",
  content: ""
}


export default function NuevaNota() {
  const [nota, setNota] = useState(initialState)
  const addNota = useNotasStore(state=>state.addNota)

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj ={
      id: nanoid(),
      day: getDate().day,
      month: getDate().month,
      year: getDate().year,
      title: nota.title,
      content: nota.content,
      color: 0
    }
    console.log(nota)
    //console.log(obj)
    //addNota(obj)

    setNota(initialState)


  }

  const handleChange = (e) => {

    const {name, value} = e.target
    setNota((prev)=>({
      ...prev,
      [name]: value
    }))

  }

  return (
    <form className='grid p-4 gap-2' onSubmit={handleSubmit}>
      <input className='p-2' name='title' value={nota.title} type="text" onChange={handleChange} placeholder="title" required/>
      <input className='p-2' name='content' value={nota.content} type="text" onChange={handleChange} placeholder="content" required/>
      <div className='bg-slate-200 p-2'>
        <label className='bg-red-500 w-4 h-4'>
          <input onChange={handleChange} value="red" type="radio" name="color" id="" />
        </label>
        <label className='bg-blue-500 w-4 h-4'>
          <input onChange={handleChange} value="blue" type="radio" name="color" id="" />
        </label>
      </div>
      <button className='bg-neutral-200 p-2 rounded-full'>Crear</button>
    </form>
  )
}
