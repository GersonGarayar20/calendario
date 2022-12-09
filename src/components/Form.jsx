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
      color: nota.color
    }
    console.log(nota)
    console.log(obj)
    addNota(obj)

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
      <h2>Select a color:</h2>
      <div className=' p-2 flex gap-2'>
        <RadioColor color="#FECACA" change={handleChange}/>
        <RadioColor color="#FED7AA" change={handleChange}/>
        <RadioColor color="#D9F99D" change={handleChange}/>
        <RadioColor color="#BAE6FD" change={handleChange}/>
        <RadioColor color="#DDD6FE" change={handleChange}/>
      </div>
      <button className='bg-neutral-200 p-2 rounded-full'>Crear</button>
    </form>
  )
}

function RadioColor({color, change}) {
  return(
    <label style={{backgroundColor: color}} className="w-8 h-8 rounded-xl cursor-pointer">
      <input className='peer hidden' onChange={change} value={color} type="radio" name="color" id="" />
      <div className='invisible peer-checked:visible border-2 rounded-xl border-neutral-500 h-full'></div>
    </label>
  )
}
