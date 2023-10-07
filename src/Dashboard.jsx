import  Sidepanel  from "./component/Paneldash"
import { useLocation } from 'react-router-dom';


function Dashboard() {
  const location = useLocation();
  return ( 
    <div className="grid grid-cols-5 h-screen text-theBeige">
          <Sidepanel/>
    </div>
  )
}


export default Dashboard