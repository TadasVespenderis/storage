import React from 'react';

class Items extends React.Component{
    render(){
        let filtered = this.props.items;
        if(this.props.activeCategory==='All') {
            filtered = this.props.items;
        }else {filtered = this.props.items.filter(item => item.category === this.props.activeCategory)};

        const items = filtered.map((cat, i)=>{
            return <tr key={i}><td><b>{cat.name}</b></td><td>{cat.category}</td><td>Price: {cat.price} €</td><td>Quantity on stock: {cat.stock}</td><td>
            <button onClick={()=>this.props.removeItem(i)}>x</button></td></tr>
        });
        return(
            <div className="items">
                    <table>
                        <thead></thead>
                        <tbody>
                        {items}
                        </tbody>
                    </table>
            </div>
        )
    }
};

export default Items;