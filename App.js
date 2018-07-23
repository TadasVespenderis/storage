import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Items from './components/Items';
import Additems from './components/Additems';
import CategoriesAndStatistics from './components/CategoriesAndStatistics';

class App extends React.Component{
    state = {
        tabs:['Items', 'Additems', 'CategoriesAndStatistics'],
        activeTab:'Items',
        categories:['keyboards', 'laptops', 'monitors', 'hard-drives', 'All'],
        activeCategory: 'keyboards',
        items:[
            {name: 'Smart 2.1', category: 'keyboards', price: 10, stock: 30},
            {name: 'Dell 201', category: 'laptops', price: 200, stock: 50},
            {name: 'Samsung TT', category: 'monitors', price: 150, stock: 23},
            {name: 'Toshiba HDD', category: 'hard-drives', price: 15.6, stock: 34},
            {name: 'Dell', category: 'keyboards', price: 13, stock: 3},
            {name: 'Acer 500', category: 'laptops', price: 280, stock: 10},
            {name: 'Banga 1990', category: 'monitors', price: 1, stock: 1},
            {name: 'Smart sim', category: 'hard-drives', price: 5.36, stock: 4},
            {name: 'Toshiba HDD', category: 'hard-drives', price: 15.6, stock: 34},
            {name: 'Giga', category: 'keyboards', price: 3, stock: 3},
            {name: 'Apple', category: 'laptops', price: 1280, stock: 30},
            {name: 'Sony', category: 'monitors', price: 188, stock: 18},
            {name: 'Jumbo', category: 'hard-drives', price: 155.36, stock: 4}
        ],
    };

    switchTab = activeTab => this.setState({activeTab});
    switchCategory = activeCategory => this.setState({activeCategory});

    addItem = (value)=>{
        const newItems = [...this.state.items, value];
            this.setState({
            items: newItems
        });
    };
    removeItem = (index)=>{

        const filtered = this.state.items.filter((item, i)=>{
            return index!==i;
        })
        this.setState({items:filtered})
    };

    renderContent = ()=>{

        switch(this.state.activeTab){
            case 'Items': return <Items
            activeCategory={this.state.activeCategory}
            items={this.state.items}
            removeItem={this.removeItem}
            />;
            case 'Additems': return <Additems
            addItem={this.addItem}/>;
            case 'CategoriesAndStatistics': return <CategoriesAndStatistics
            categories = {this.state.categories}
            items={this.state.items}
            />;
        }
    };
    render(){
        return(
            <div className="main">
                <Header switchTab={this.switchTab}
                        tabs={this.state.tabs}
                        active={this.state.activeTab}/>
                <Sidebar
                    switchCategory={this.switchCategory}
                    active={this.state.activeCategory}
                    categories={this.state.categories}
                />
                <div className="content">
                {this.renderContent()}
                </div>
            </div>
        )
    }
};

export default App;