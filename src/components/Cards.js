import React from 'react'
import '../sass/cards-style.scss'

const Cards =(props)=>{
    return(

        <div className="col-4 mt-4 flex-column newsCard">
            <div className="card w-100">
                <img src={props.src} id="img01"  alt=""/>
                
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

                    <p className="mb-0 mt-3 pb-0">{props.text}</p>

                    <button type="button" className="btn btn-outline-success mt-3">Batafsil</button>


                </div>

            </div>

        </div>

    )
}
export default Cards