import React from 'react'
import'./APP.css'
import Mobilesingle from "./singles/Mobilesingle";
import Mobilepage from "./STORES/Pages/Mobilepage";
import Landingpage from "./STORES/Pages/Landingpage";
import Bookspage from "./STORES/Pages/Bookspage";
import TVpage from "./STORES/Pages/TVpage";
import ACpage from"./STORES/Pages/ACpage";
import Fridgepage from"./STORES/Pages/Fridgepage";
import Computerpage from"./STORES/Pages/Computerpage";
import Kitchenpage from './STORES/Pages/Kitchenpage';
import Furniturepage from "./STORES/Pages/Furniturepage";
import Menpage from "./STORES/Pages/Menpage";
import Womenpage from "./STORES/Pages/Womenpage";
import Computersingle from "./singles/Computersingle";
import Mensingle from "./singles/Mensingle";
import Booksingle from "./singles/Booksingle";
import Womensingle from "./singles/Womensingle";
import Acsingle from "./singles/Acsingle";
import Tvsingle from "./singles/Tvsingle";
import Fridgesingle from "./singles/Fridgesingle";
import Furnituresingle from "./singles/Furnituresingle";
import Kitchensingle from "./singles/Kitchensingle";
import { Route, Routes } from 'react-router';



const App = () => {
  return (
    <>
 <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/mobiles" element={<Mobilepage/>} />
      <Route path="/computers" element={<Computerpage/>} />
      <Route path="/books" element={<Bookspage/>} />
      <Route path="/tv" element={<TVpage/>} />
      <Route path="/man" element={<Menpage/>} />
      <Route path="/woman" element={<Womenpage/>} />
      <Route path="/ac" element={<ACpage/>} />
      <Route path="/fridge" element={<Fridgepage />} />
      <Route path="/furniture" element={<Furniturepage/>} />
      <Route path="/kitchen" element={<Kitchenpage/>} />
      <Route path="/mobiles/:id" element={<Mobilesingle />} ></Route>
      <Route path="/computer/:id" element={<Computersingle />} ></Route>
      <Route path="/men/:id" element={<Mensingle/>} ></Route>
      <Route path="/women/:id" element={<Womensingle/>} ></Route>
      <Route path="/books/:id" element={<Booksingle/>} ></Route>
      <Route path="/ac/:id" element={<Acsingle/>} ></Route>
      <Route path="/tv/:id" element={<Tvsingle/>}></Route>
      <Route path="/fridge/:id" element={<Fridgesingle/>}></Route>
      <Route path="/furniture/:id" element={<Furnituresingle/>}></Route>
      <Route path="/kitchen/:id" element={<Kitchensingle/>}></Route>
    </Routes>
    </>
  )
}

export default App

