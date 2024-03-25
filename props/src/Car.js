function Car(props) {

    const state = {
        brand: "Benz",
        model: "AMG"
    };

    return <>
        <h2>This is a { props.brand } car!</h2>
        <h2>state {state.brand} - {state.model}</h2>
    </>
    }

export default Car;