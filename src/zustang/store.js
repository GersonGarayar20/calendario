import create from 'zustand'

const KEY = "notes"

const useNotasStore = create((set)=>({

  notas: JSON.parse(localStorage.getItem(KEY)) || [],
  addNota: (data) => set((state) =>{

      const newData = [...state.notas, data]
      localStorage.setItem(KEY,JSON.stringify(newData))
      return newData

    })

}))


export default useNotasStore