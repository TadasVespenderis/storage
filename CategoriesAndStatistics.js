import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class CategoriesAndStatistics extends React.Component{
    render(){

        const totals = this.props.categories.map((category)=>{
            var sum=0;
            this.props.items.forEach((item)=>{
                if(category===item.category) sum++
            })
            return sum;
        });

        const categories = this.props.categories.map ((cat, i)=>{
            const total = totals.reduce((total, n)=> total + n, 0);
            if(cat!=='All') {
                return <li key={i}>{cat} ({totals[i]})</li>
            }else return <li key={i}>{cat} ({total})</li>
        });


        return(
            <div>
                <ul>
                    {categories}
                </ul>
                <div>
                    <Sparklines width={400} height={200} data={totals}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
                </div>
            </div>
        )
    }
};

export default CategoriesAndStatistics;