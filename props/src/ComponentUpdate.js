import React, { Component } from "react";

class ComponentUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "Green" };
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "Orange" });
        }, 5000);
    }

    getSnapshotBeforeUpdate(pprops, snapshot) {
        document.getElementById("...").innerHTML = snapshot.color;
    }

    componentDidUpdate() {
        document.getElementById("....").innerHTML = this.state.color;
    }

    change() {
        this.setState({ color: "Red" });
    }
    render() {
        return (
            <div className="app">
                <h1>color: {this.state.color}</h1>
                <button onClick={() => this.change()}>change color</button>
                <div id="..."></div>
                <div id="...."></div>
            </div>
        );
    }
}

export default ComponentUpdate;
