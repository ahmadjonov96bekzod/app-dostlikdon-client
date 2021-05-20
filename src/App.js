
import {ToastContainer} from 'react-toastify'
import {BrowserRouter, Switch, Route, useLocation} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import NewsView from './pages/NewsView'
import Footer from './components/Footer'
import Login from './pages/Login'
import AdminLayout from './components/AdminLayout'
import AdminMenus from './pages/AdminMenus'
import AdminNews from  './pages/AdminNews'


const App = () =>{

   // const location = useLocation();


   return(

       <BrowserRouter>

           {window.location.href.includes("/admin") ? "" : <Navbar/> }




           <Switch>

               <Route path="/" exact component={Home} />

               <Route path="/news-view" exact component={NewsView}/>

               <Route path="/login" exact component={Login}/>

               <Route path="/admin/menus" exact component={AdminMenus}/>

               <Route path="/admin/news" exact component={AdminNews}/>

           </Switch>

           {window.location.href.includes("/admin") ? "" : <Footer/> }


           <ToastContainer/>

       </BrowserRouter>

   )
};

export default App
