import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {


    render() {
        const tabs = [{0:"first tab"},{1:"second tab"},{2:"third tab"}]
        return(

            <>
                <Clock />
                <Tabs tabs={tabs}/>
                
            </>
        )
    }
}


export default Root;