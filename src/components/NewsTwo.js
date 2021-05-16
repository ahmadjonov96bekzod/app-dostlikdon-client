import React from 'react'
import Cards from '../components/Cards'
import '../sass/news-view-style.scss'


const NewsTwo =(props)=>{
    return(
       <div className="container">
           <div className="row">
               <div className="col-12">
                   <h2>Korxonamiz yangiliklar</h2>
               </div>

               <div className="row mb-5 flex-wrap">


                   <Cards
                       src="images/image 14.png"
                       title="E'lon"
                       text=" 'Do'stlikDonMaxsulotlari' Aj aksiyadorlari diqqatiga 2020-yil 17-mart kuni soat 9:00 da bo'lin o'tadigan... " />

                   <Cards
                       src="images/image 9.png"
                       title="Export qiluvchi tadbirkorlik subyektlariga..."
                       text=" 'UzdonMaxsulot' aksiyadorlik komyaniya tizm korxonalariga tizm korxonalari tomonidan istisno tariqasida..." />

                   <Cards
                       src="images/Rectangle 18.png"
                       title=" 'DO'STIKDONMAXSULOTLARI' AJ boshqaruv raisi... "
                       text=" 'Do'stlikDonMaxsulotlari'AJ boshqaruv raisi tomonidan Do'stik tumandagi 2-sonli... " />



               </div>

           </div>
       </div>
    )
}

export default NewsTwo