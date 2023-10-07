import { useLocation } from 'react-router-dom';


function Home() {
  const location = useLocation();
  return ( 
    <div className="bg-theBlack h-screen text-theBeige">
          <p>hellooooo</p>
    </div>
  )
}


export default Home