
import {ToastContainer} from 'react-toastify'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import NewsView from './pages/NewsView'
import Footer from './components/Footer'
import Login from './pages/Login'



const App = () =>{
   return(

       <BrowserRouter>

           <Navbar/>

           <Switch>

               <Route path="/" exact component={Home} />

               <Route path="/news-view" exact component={NewsView}/>

               <Route path="/login" exact component={Login}/>

           </Switch>

           <Footer/>

           <ToastContainer/>

       </BrowserRouter>

   )
};

export default App
