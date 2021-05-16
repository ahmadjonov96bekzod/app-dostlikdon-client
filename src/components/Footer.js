
import React from 'react'
import {Link} from 'react-router-dom'



const Footer = () =>{
    return(
        <div className="w-100 bg-secondary py-5">
            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <Link to="/"><h3 className="text-white">Dustlikdon.uz</h3></Link>
                        <p className="mb-0 text-light  pb-0 mt-3">Jizzax viloyati Do'stlik tumani </p>
                        <p className="mb-0 text-light  pb-0">Sanoatchilar MFY Sanoat ko'chasi 49</p>

                    </div>

                    <div className="col-2">
                        <h3 className="text-white">Asosiy</h3>
                           <p className="mb-0 pb-0 mt-3 text-light ">Jamiyat haqida</p>
                            <p className="list-group text-light ">Struktura</p>
                            <p className="list-group text-light  ">Yangiliklar</p>
                    </div>


                    <div className="col-2">
                        <h3 className="text-white">Xizmatlar</h3>
                            <p className="list-group  text-light mt-3 ">Elektron murojaatlar</p>
                            <p className="list-group  text-light ">Interaktiv xizmatlar</p>
                            <p className="list-group  text-light ">Saytdan izlash</p>

                    </div>


                    <div className="col-2">
                        <h3 className="text-white">Bog'lanish</h3>

                            <p className="list-group mt-3  ml-0"><small className="text-light"><img src="images/Frame22.png" alt=""/> 998 71 335 41 16</small></p>
                            <p className="list-group text-muted"><a className="text-decoration-none text-white" href="https://google.com"><img src="images/Frame23.png"  alt=""/>info@dustlikdon.uz </a></p>


                    </div>


                </div>
            </div>
        </div>



    )
}
export default Footer