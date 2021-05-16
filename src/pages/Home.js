
import React from 'react'
import News from '../components/News'
import Media from '../components/Media'
import Banner from '../components/Banner'
import Karousel from '../components/Carousel'
import AnotherSites from '../components/AnotherSites'


const Home = () =>{
    return(
        <div className="">
            <div className="row">
\
                <Karousel/>

                <News/>

                <Banner/>

                <Media/>

                <AnotherSites/>


            </div>
        </div>
    )
}
export default Home


