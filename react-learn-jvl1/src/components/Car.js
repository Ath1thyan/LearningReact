function Car(props){
    const {carInfo} = props;
    const {brand, color} = carInfo;
    
    // const text = `Hi! I  am a ${props.carColor} ${props.carBrand} Car.`;
    const text = `Hi! I  am a ${color} ${brand} Car.`;
    return (
      <h2> {text} </h2>
    )
  }

export default Car;