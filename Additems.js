import React from 'react';

class Additems extends React.Component{
    state={
        tempItem: {name: '', category: '', price: '', stock: ''}
    };
    clearInput = ()=>{
        this.setState({tempItem: {name: '', category: '', price: 0, stock: ''}})
    };
    handleInput = (value, type)=>{
        if(type==='price') value = parseFloat(value);
        this.setState({tempItem:{...this.state.tempItem, [type]:value}})
    };

    render(){
        return(
            <div className="additems">
                <input placeholder="name"
                    onChange={(e)=>this.handleInput(e.target.value, 'name')}
                    type="text"
                    value={this.state.tempItem.name}/>
                <select
                    onChange={(e)=>this.handleInput(e.target.value, 'category')}
                    value={this.state.tempItem.category}>
                        <option value="keyboards">keyboards</option>
                        <option value="laptops">laptops</option>
                        <option value="monitors">monitors</option>
                        <option value="hard-drives">hard-drives</option>
                </select>
                <input placeholder="price"
                       onChange={(e)=>this.handleInput(e.target.value, 'price')}
                       type="number"
                       value={this.state.tempItem.price}/>
                <input placeholder="stock"
                       onChange={(e)=>this.handleInput(e.target.value, 'stock')}
                       type="number"
                       value={this.state.tempItem.stock}/>
                <div className="btn"
                     onClick={()=>{
                         this.props.addItem(this.state.tempItem);
                         this.clearInput()}}
                >Add item</div>
            </div>
        )
    }
};

export default Additems;