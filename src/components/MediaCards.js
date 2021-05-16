import React from 'react'
import '../sass/media-cards.scss'



const MediaCards =(props)=>{
    return(

        <div className="col-4 mt-4 flex-column mediaCard">
            <div className="card w-100">
                <img src={props.src} id="img02"  alt=""/>

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <img src="images/Frame1.png" className="mr-2" alt="error"/>
                            <p className="mb-0 text-secondary pb-0">16:48/12.11.20</p>
                        </div>
                        <div className="d-flex">
                            <img src="images/Frame12.png" className="mr-2" alt="error"/>
                            <p className="mb-0 text-secondary pb-0">321</p>
                        </div>
                        <div className="d-flex">
                            <img src="images/Frame11.png"  className="mr-2" alt="error"/>
                            <p className="mb-0 text-secondary pb-0 ">100</p>
                        </div>
                    </div>

                    <h5 className="mb-0 pb-0 mt-2">{props.title}</h5>

                </div>

            </div>

        </div>

    )
}
export default MediaCards