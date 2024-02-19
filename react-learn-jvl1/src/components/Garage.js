import Car from './Car.js';
import Apple from './Fruit';

function Garage(){
    const isOpened = false;
    // const brand = 'Ferrari';
    // const color = 'Black';

    const carInfo = { brand : "Ferrari", color : "Black" };
    // const carInfo = {};
    const appleInfo = { type : "Fuji", color: "Red"};

    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;

    const carList = [
        { brand : "BMW", color : "White" },
        { brand : "Mercedes", color : "Blue" },
        { brand : "Audi", color : "White" },
        { brand : "Volvo", color : "Black" },
    ];

    const numList = [1,2,3,4,5,6,7,8,9,10];

    return (
      <>
        <h1>Who lives inside my  garage?</h1>
        {/* <Car carBrand = {brand} carColor = {color} /> */}

        { showCarInfo ?
            <Car carInfo = {carInfo} /> : null
        }
        { carInfo.brand !== undefined && carInfo.color !== undefined ?
            <Car carInfo = {carInfo} /> : null
        }
        { showCarInfo &&
            <Car carInfo = {carInfo} /> 
        }

        <Apple appleInfo = {appleInfo} />

        { isOpened ? 
            <h2>Garage door is opened</h2> : <h2>Garage  door is closed</h2>
        }

        <ul>
            { carList.map((carInfo) => <li key={carInfo.brand} ><Car carInfo={carInfo}/></li>)}
            {/* { carList.map((carInfo) => <li><Car carInfo={carInfo}/></li>)} */}
            {/* { carList.map(() => {return <li><Car/></li>})} */}
        </ul>

        <ul>
            {numList.map((num, index) => {return <p key={index}>{num}</p>})}
        </ul>
      </>
    )
  }

export default Garage;