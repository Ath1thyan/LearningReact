import React from "react";

class Apple extends React.Component {
    render () {
        const {appleInfo} = this.props;
        const {color} = appleInfo;
        return (
            <h2>I am {color} {appleInfo.type} apple!</h2>
        )
    }
}

export default Apple;