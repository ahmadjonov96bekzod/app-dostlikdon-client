import React from 'react'
import '../sass/banner-style.scss'


const Banner =()=>{
    return(
        <div className="w-100 px-0 mx-0  mt-5 d-flex banner justify-content-between align-items-center">

            <img src="images/image 18.png" className="img03 ml-5" alt=""/>
            
            <div className="mx-5">
                <h2>Shikoyatlart mavjudmi ?</h2>
                <h2>online tarzda yuboring</h2>
            </div>

            <button type="button" class="btn  btn-success">Murojaat yuborish</button>

            <img src="images/image 17.png" class="img04 mr-5" alt=""/>
            
            
        </div>
    )
}
export default Banner