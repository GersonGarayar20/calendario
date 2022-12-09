import {Link} from 'wouter'

export default function Calendario({calendar, data}) {

  return (
    <ul className="grid grid-cols-7 text-center border">
        <li>Dom</li>
        <li>Lun</li>
        <li>Mar</li>
        <li>Mie</li>
        <li>Jue</li>
        <li>Vie</li>
        <li>Sab</li>
        {
          calendar.map(el=>{

            const da = data.find(d=>{
              if (d.day === el.day && d.month === el.month && d.year === el.year) {
                return d
              }
            })

        
            return (
              <Link key={el.day} href={`/days/${el.day}/${el.month}/${el.year}`}>
                <li style={el.day?{gridColumnStart: el.weekday+1}:{}}
                className={`${da?.day?"bg-orange-300":""} p-2 hover:bg-sky-200`}>{el.day}</li>
              </Link>
            )

          })
        }
      </ul>
  )
}
