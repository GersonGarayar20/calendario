import Months from "./pages/Months";
import { Route } from 'wouter'
import Days from "./pages/Days";
import Nav from "./components/Nav";

export default function App() {

  return (
    <div>
      <Nav/>
      <Route path="/" component={Months} />
      <Route path="/days" component={Days} />
      <Route path="/days/:day/:month/:year" component={Days} />

      
    </div>
  )
}
