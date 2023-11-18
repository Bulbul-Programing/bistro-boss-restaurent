import { useEffect, useState } from "react";

const ProductToken = ({ popular }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/menu/${popular}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 my-10">
                {
                    product?.map(item =>
                        <div >
                            <div className="flex gap-x-3">
                                <img className="w-[80px] rounded-tr-full rounded-br-full rounded-bl-full" src={item.image} alt="" />
                                <div>
                                    <h5 className="text-lg font-bold">{item.name}---------</h5>
                                    <p className="text-slate-500">{item.recipe}</p>
                                </div>
                                <div>
                                    <p className="text-yellow-500 font-bold">${item.price}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className="flex justify-center mb-10">
                <button className="btn text-center border-b-2 border-black border-t-transparent border-r-transparent border-l-transparent rounded-md bg-transparent">View Full  Menu</button>
            </div>
        </div>
    );
};

export default ProductToken;