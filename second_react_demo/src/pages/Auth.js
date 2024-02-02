import React from 'react';
// import {Component} from 'react';

class Auth extends React.Component {
    constructor(){
        super();
    }

    render() {
        let car_brand = this.props.car_brand;
        let {car_model, cars} = this.props;

        return (
            <div>
            <div>
                <h1>Auth</h1>
            </div>

            <div>
                Brand : {car_brand} Model : {car_model}

                <table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((brand, model) => {
                            <tr>
                                <td>{cars.car_brand}</td>
                                <td>{cars.car_model}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Auth;