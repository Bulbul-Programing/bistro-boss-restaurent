import React, { useEffect, useState } from 'react';
import CartTitle from '../../Shared/CartTitle/CartTitle';
import axios from 'axios';


const Recommendation = () => {
    const [recipe, setRecipe] = useState([])
    useEffect(()=>{
        axios.get('menu.json')
        .then(res => setRecipe(res.data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <CartTitle shortTitle='Should Try' heading='CHEF RECOMMENDS'></CartTitle>
            <div className='grid grid-cols-3 gap-x-10 '>
                {
                    recipe.slice(6,9).map(item => <div key={item._id}>
                        <div className='bg-[#e8e7e7] pb-6 rounded-lg'>
                            <img className='rounded-lg mb-4' src={item.image} alt="" />
                            <div className='text-center px-2'>
                                <h1 className='text-xl font-bold mb-2'>{item.name}</h1>
                                <p>{item.recipe.slice(0, 60) }</p>
                                <button className='btn btn-outline text-yellow-500 border-b-2 border-r-transparent border-l-transparent border-t-transparent border-yellow-500 hover:text-yellow-500  mt-3'>Add Cart</button>
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommendation;