import React from "react";


class Clock extends React.Component {

    
    constructor(props) {
        super(props);
        
        this.stopper = null;
        
        this.state = {
            date: new Date(), // 42 -> 43 -> 43
            value: 'hello'
        };
    }
    
    
    tick() {
        // console.log(this); 
        this.setState({date : new Date() })
    }
    
    componentWillUnmount() {
        clearInterval(this.stopper);
    }
    
    componentDidMount(){

        
        this.stopper = setInterval(() => {
            this.tick();
        },1000);
    }
    // const el = {x: 23, y: 45, z: {a: 39}}

    // const {a} = el.z // {a: 39}
        // a = {a: 39} -> a : 39
        // a = 39
        // {a} -> a : a 
        // a -> {a:39}
        // {a} -> 39
    render() {
        // debugger
        
        const {date} = this.state;
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let time = <span>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</span>
        let currDate = <span>{days[date.getDay()]} {months[date.getMonth()]} {date.getFullYear()}</span>
        return(
            <> 
            <h1>Clock</h1>
            <div className="clock">
                <p>
                    <span>Time: </span>
                    {time}
                </p>
                <p>
                    <span>Date: </span>
                        {currDate}
                </p>
           </div>
           </>
        )

    }

}


export default Clock;
