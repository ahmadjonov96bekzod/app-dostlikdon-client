import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages/Home'
import NewsTwo from  '../components/NewsTwo'
import '../sass/news-view-style.scss'


const NewsView = () => {
    return (
        <div className="container newsPage ">
            <div className="row">

                <div className="col-8">
                    <div className="w-100 lines p-5">

                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="text-primary" to={Home}>Jamiyat haqida</Link>

                            <div className="d-flex justify-content-center align-items-center">
                                <img src="images/Frame1.png" className="mr-2" alt="error"/>
                                <p className="mb-0 text-secondary pb-0">16:48/12.11.20</p>
                            </div>

                            <div className="d-flex">
                                <img src="images/Frame12.png" className="mr-2" alt="error"/>
                                <p className="mb-0 text-secondary pb-0">321</p>
                            </div>

                            <div className="d-flex">
                                <img src="images/Frame11.png" className="mr-2" alt="error"/>
                                <p className="mb-0 text-secondary pb-0 ">100</p>
                            </div>

                        </div>

                        <h3 className="my-3">Eksport qiluvchi tadbirkorlik subektlariga!!!</h3>

                        <p className="mb-0 pb-0">“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan
                            istisno tariqasida maxalliy tadbirkorlik sub'ektlariga eksport qilish sharti bilan birja
                            savdolari orqali bug’doy sotilmoqda. Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining
                            boshlangich narxi qo‘shilgan qiymat solig’isiz 1 610 000 so‘mdan, qo‘shilgan qiymat
                            solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi. Tadbirkorlik sub'ektlariga “nol'”
                            darajali qo‘shilgan qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan
                            qiymat soligining ortiqcha summasi Adliya vazirligi tomonidan 2016 yil 7 aprelda 2775-son
                            bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.</p>

                        <div className="line my-5 w-100"> </div>

                        <div className="d-flex justify-content-between my-3  align-items-center">
                            <h4>Mavzuga izohlar</h4>
                            <h5>2 ta fikr</h5>
                        </div>

                        <div className="d-flex my-2 justify-content-center align-items-center">
                            <img src="image/Rectangle 64.png" className="fotos" alt="error"/>

                            <textarea className="form-control h-100 " rows="3" placeholder="Izoh qoldirishingiz mumkin"></textarea>
                        </div>

                        <div className="d-flex my-3 ">

                            <img src="image/Rectangle 66.png" id="foto1" className="fotos" alt=""/>

                            <div>
                                <h5>Nigina Karimova</h5>
                                <p className="mb-0 pb-0 w-100">Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</p>

                                <div className="d-flex justify-content-between mt-1 align-items-center">

                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="image/like.png" className="mx-2" alt="error"/>
                                        <p className="mb-0 pb-0">Javob qaytarish</p>
                                    </div>

                                    <p className="mb-0 pb-0 text-muted">15 daqiqa avval</p>
                                </div>

                            </div>

                        </div>

                        <div className="d-flex my-3 ">

                            <img src="image/Rectangle 67.png" id="foto2" alt=""/>

                            <div>
                                <h5>Sahar Kenjayev</h5>
                                <p className="mb-0 pb-0 w-100">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi qo‘llash</p>
                                <p className="mb-0 pb-0 w-100">natijasida xosil bo‘lgan qo‘shilgan qiymat soligining<Link className="text-primary" to={Home}> batafsil</Link></p>

                                <div className="d-flex justify-content-between mt-1 align-items-center">

                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="image/like-colored.png" className="mx-2" alt="error"/>
                                        <p className="mb-0 pb-0">Javob qaytarish</p>
                                    </div>

                                    <p className="mb-0 pb-0 text-muted">15 daqiqa avval</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-4 ">
                    <div className="twis w-100">
                        <div className="w-100 ">

                            <div className="mt-1 lines">
                                <h2>Media</h2>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="images/Frame1.png" alt=""/>
                                        <p className="mx-2 mb-0 pb-0 text-muted">16:48 / 12.11.20</p>
                                    </div>
                                    <Link className="text-primary" to={Home}>Foto galeraya</Link>
                                </div>

                                <h6 className="py-1">"DO`STLIKDONMAXSULOTLARI" AJ boshqaruv raisi...</h6>

                                <div className="line my-2 w-100"></div>
                            </div>

                            <div className="mt-1 lines">

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="images/Frame1.png" alt=""/>
                                        <p className="mx-2 mb-0 pb-0 text-muted">16:48 / 12.11.20</p>
                                    </div>
                                    <Link className="text-primary" to={Home}>Video galeraya</Link>
                                </div>

                                <h6 className="py-1">"Xisobot: Buxgalteriya balansi 2- kvartal</h6>

                                <div className="line my-2 w-100"></div>
                            </div>

                            <div className="mt-1 lines">

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="images/Frame1.png" alt=""/>
                                        <p className="mx-2 mb-0 pb-0 text-muted">16:48 / 12.11.20</p>
                                    </div>
                                    <Link className="text-primary" to={Home}>Video galeraya</Link>
                                </div>

                                <h6 className="py-1">Aksiyadorlik kompaniya tizim korxonalari</h6>

                                <div className="line my-2 w-100"></div>
                            </div>

                            <div className="mt-1 lines">

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src="images/Frame1.png" alt=""/>
                                        <p className="mx-2 mb-0 pb-0 text-muted">16:48 / 12.11.20</p>
                                    </div>
                                    <Link className="text-primary" to={Home}>Foto galeraya</Link>
                                </div>

                                <h6 className="py-1">Xisobot: Buxgalteriya balansi 2- kvartal</h6>

                                <div className="line my-2 w-100"></div>
                            </div>

                        </div>
                        <div className="mt-4 bg-grey p-5">
                            <h5 className="text-center mb-0 pb-0">Shikoyatlar mavjudmi?</h5>
                            <h5 className="text-center mb-0 pb-0">Onlayn tarzda yuboring</h5>

                            <img className="d-block mx-auto w-50" src="images/image 11.png" alt="error"/>
                            <h5 className="text-center mb-0 pb-0">Davlat interaktiv</h5>
                            <h5 className="text-center mb-0 pb-0">xizmatlari yagona portali</h5>
                        </div>

                    </div>



                </div>


                <NewsTwo className="mb-5"/>

            </div>
        </div>
    )
}

export  default NewsView