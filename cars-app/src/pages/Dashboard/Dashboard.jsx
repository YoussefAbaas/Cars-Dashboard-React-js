import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/SideBar/SideBar'
import Feature_Card from '../../components/FeatureCard/FeatureCard'
import energy from '../../img/energy.png'
import range from '../../img/Vectorrange_logo.png'
import breakfluid from '../../img/Vectorbreakfluid_logo.png'
import tirewear from '../../img/Vectortirewear_logo.png'
import { useState } from 'react'
import CarsStatistics from '../../components/CarStatistics/CarStatistics'
import MilesStatistics from '../../components/MilesStatistics/MilesStatistics'
import car1 from '../../img/car1.png'
import car2 from '../../img/car2.png'
import car3 from '../../img/car3.png'
import CarCard from '../../components/CarCard/CarCard'
import './Dashboard.scss'

function Dashboard() {
    const [featureCards, setfeatureCards] = useState([
        { name: 'Energy', img:  energy , percentage: 45, stroke: 'black' },
        { name: 'Range', img:  range , percentage: 50, stroke: '#FF7E86' },
        { name: 'Break fluid', img:  breakfluid , percentage: 9, stroke: '#A162F7' },
        { name: 'Tire Wear', img:  tirewear , percentage: 25, stroke: '#F6CC0D' }
    ]);
    const features=featureCards.map((card)=>{
     return <Feature_Card name={card.name} img={card.img} percentage={card.percentage} stroke={card.stroke} />
    })
    const [carStatistics, setcarStatistics] = useState([
        { time: '7pm', cars: 1000 },
        { time: '9pm', cars: 1170 },
        { time: '11pm', cars: 660 },
        { time: '1am', cars: 1030 },
        { time: '3pm', cars: 1000 },
        { time: '5pm', cars: 660 },
        { time: '7pm', cars: 1030 }
    ]);
    const [milesStatistics, setmilesStatistics] = useState([
        { time: '1pm', miles: 8.49 },
        { time: '2pm', miles: 10.94 },
        { time: '3pm', miles: 19.30 },
        { time: '4pm', miles: 35 },
        { time: '5pm', miles: 17.6 },
        { time: '6pm', miles: 15 },
        { time: '7pm', miles: 23 }
    ]);
    const [carCards, setcarCards] = useState([
        {
            percentage: 64, name: 'Mini Cooper', price: 132, rent: 32, img: car1
        },
        {
            percentage: 74, name: 'Porsche 911 Carrera', price: 130, rent: 28, img: car2
        },
        {
            percentage: 64, name: 'Porsche 911 Carrera', price: 130, rent: 28, img: car3
        },
    ]);
    const Cars = carCards.map((card) => {
        return <CarCard percentage={card.percentage} name={card.name} price={card.price} rent={card.rent} img={card.img} />
    })
    return (
        <div>
            <body>
                <Header />
                <main>
                    <Sidebar />
                    <section className="dashboard container">
                        <div id="features" className="d-flex justify-content-around h-25 w-100 mt-4 ms-1">
                            {features}
                        </div>

                        <div class="statistics w-100 mt-4 d-flex justify-content-between p-4 px-1">
                            <MilesStatistics data={milesStatistics} />
                            <CarsStatistics data={carStatistics} />
                        </div>

                        <div class="cars w-100 ms-2 d-flex justify-content-around align-items-center">
                            { Cars }
                        </div>
                    </section>
                </main>
            </body>
        </div>
    )
}

export default Dashboard