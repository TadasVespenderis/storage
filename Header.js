import React from 'react';

class Header extends React.Component{

    render(){
        const tabs = this.props.tabs.map (tab =>{
            return(
                <li className="liHeader"
                style={this.props.active===tab ? {backgroundColor: 'lightgrey'}: null}
                onClick={()=>this.props.switchTab(tab)}
                key={tab}>
                    {tab}
                </li>
            )
        });
        return(
            <div className="header">
                <h3>Storage</h3>
                {tabs}
            </div>
        )
    }
};

export default Header;