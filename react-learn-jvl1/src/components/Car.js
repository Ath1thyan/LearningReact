function Car(props){
    
    const text = `Hi! I  am a ${props.carColor} ${props.carBrand} Car.`;
    return (
      <h2> {text} </h2>
    )
  }

export default Car;