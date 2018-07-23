import React from 'react';

class Sidebar extends React.Component{
    render(){
            const categories = this.props.categories.map ((cat, i)=>{
                return <li key={i}
                  className="liSidebar"
                  style={this.props.active===cat ? {backgroundColor: 'lightgrey'}: null}
                  onClick={()=>this.props.switchCategory(cat)}>{cat}</li>
            });
        return(
            <div className="sidebar">
                <h3>Categories</h3>
                {categories}
            </div>
        )
    }
};

export default Sidebar;