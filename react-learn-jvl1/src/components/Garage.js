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
      </>
    )
  }

export default Garage;