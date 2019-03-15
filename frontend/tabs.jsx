import React from "react";

class Tabs extends React.Component {
    // props = [{},{},{}] props.tabs[0]
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            pValue: props.tabs[0][0],
            classname: ['active', '', '']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    updater(N) {
        this.state.classname[0] = '';
        this.state.classname[1] = '';
        this.state.classname[2] = '';
        this.state.classname[N] = 'active';

        const intN = parseInt(N);
        this.setState({selected: intN, pValue: props.tabs[intN][intN]});

    }
    handleClick(N) {

        // console.log(updater(N));
        this.state.classname[0] = '';
        this.state.classname[1] = '';
        this.state.classname[2] = '';
        this.state.classname[N] = 'active';

        const intN = parseInt(N);
        this.setState({ selected: intN, pValue: this.props.tabs[intN][intN] });

    }

    render() {
        // click on all spans, this.functionName.bind(this, args)
        // the function set state to 0,1,2
        // update the value -> s
        console.log(this.state);
        console.log(this.props)
        return(
            <>
                <h1>Tabs</h1>
                <div className="tabs">
                    <div className="tab-header">
                        <span 
                        className={this.state.classname[0]}
                        onClick={this.handleClick.bind(this, [0])}
                        >one</span>
                        
                        <span 
                        className={this.state.classname[1]}
                            onClick={this.handleClick.bind(this, [1])}
                        
                        >two</span>
                        <span 
                        className={this.state.classname[2]}
                            onClick={this.handleClick.bind(this, [2])}
                        
                        >three</span>
                    </div>
                    <div className="tab-content">
                        <p>
                        {this.state.pValue}
                        </p>
                    </div>
                </div>

            </>
        )
    }
}


export default Tabs;

/* div>div>span*3 */