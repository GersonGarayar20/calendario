import { data } from "autoprefixer"

export function getDias (n = 0) {

  let timeDia = 1000*60*60*24

  let time = new Date().getTime()

  let ayer = new Date(time + timeDia * (n - 1))
  let hoy = new Date(time + timeDia * n)
  let mañana = new Date(time + timeDia * (n + 1))

  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  return {
    ayer: [dias[ayer.getDay()], ayer.getDate()],
    hoy: [dias[hoy.getDay()], hoy.getDate(), meses[hoy.getMonth()], hoy.getMonth(), hoy.getFullYear()],
    mañana: [dias[mañana.getDay()], mañana.getDate()]
  }

}

export function getDate(obj) {

  let date
  if (obj) {
    const {year, month, day} = obj
    date = new Date(year, month, day)
  }else{
    date = new Date()
  }

  return {
    day: date.getDate(),
    weekday: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
    }
}

export const arrDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]


export const arrMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

export function getMonth(m, y) {

  let ultimoDia = new Date(y, m + 1, 0)

  const arr = []

  for (let i = 1; i <= ultimoDia.getDate(); i++) {
    arr.push({
      day: i,
      weekday: new Date(y, m, i).getDay(),
      month: m,
      year: y
    })
  }

  return arr

}