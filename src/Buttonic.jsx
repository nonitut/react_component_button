import React from "react";
// Пример классового компонента

class Buttonic extends React.Component {  

    componentDidMount(){
        console.log("Компонент кнопка отобразился")
    }

    componentDidUpdate(){
        
    }

    render() {
        return <button className="button--card">{this.props.text}</button>
    }
}

export default Buttonic;