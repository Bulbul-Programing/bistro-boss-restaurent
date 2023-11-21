import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductToken = ({ popular, btnName }) => {
    const [product, setProduct] = useState([])
    const [finalProduct, setFinalProduct] = useState([])
    const [btnState, setBtnState] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/menu/${popular}`)
            .then(res => res.json())
            .then(data => {
                const sliceProduct = data.slice(0,6)
                setFinalProduct(data)
                setProduct(sliceProduct)})
    }, [])

    const handleBtn = () => {
       
       if(btnState === true){
        setBtnState(!btnState)
        setProduct(finalProduct)
       }
       else{
        setBtnState(!btnState)
        const sliceProduct = finalProduct.slice(0,6)
        setProduct(sliceProduct)
        console.log('Ahammed');
       }
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 my-10">
                {
                    product?.map(item =>
                        <div key={item._id}>
                            <div className="flex gap-x-3">
                                <img className="w-[80px] h-[80px] rounded-tr-full rounded-br-full rounded-bl-full" src={item.image} alt="" />
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
            <div className="flex justify-center gap-x-4 mb-10">
                <button onClick={handleBtn} className={`btn ${finalProduct.length < 6 ? 'hidden' : 'block'} text-center border-b-2 border-black border-t-transparent border-r-transparent border-l-transparent rounded-md bg-transparent`} >{btnState === true ? 'Show More' : 'Show Less'}</button> 
                <Link to='/shop'><button className="btn text-center border-b-2 border-black border-t-transparent border-r-transparent border-l-transparent rounded-md bg-transparent">{btnName}</button></Link>
            </div>
        </div>
    );
};

export default ProductToken;