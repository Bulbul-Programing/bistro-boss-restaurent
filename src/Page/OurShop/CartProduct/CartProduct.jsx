import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";
import axios from "axios";
import swal from "sweetalert";

const CartProduct = ({ item }) => {
    const [product, setProduct] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/menu/${item}`)
            .then(res => res.json())
            .then(data => {
                const sliceProduct = data.slice(0, 6)
                setProduct(sliceProduct)
            })
    }, [])

    const handleAddCart = (item) => {
        const productId = item._id
        const email = user.email
        const img = item.image
        const name = item.name
        const price = item.price
        const addProduct = {productId, email, img, name, price}
        
        axios.post(`http://localhost:5000/carts/${user.email}`, addProduct)
        .then(res => {
            if(res.data.insertedId){
                swal('success', 'Add Product', 'success',{buttons: false})
            }
        })
        .catch(error => console.log(error))
    }



    return (
        <div className='grid grid-cols-3 gap-x-10 gap-y-10'>
            {
                product?.map(item => <div key={item._id}>
                    <div className='bg-[#e8e7e7] pb-6 relative rounded-lg'>
                        <img className='rounded-lg mb-4' src={item.image} alt="" />
                        <p className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md">{item.price}</p>
                        <div className='text-center px-2'>
                            <h1 className='text-xl font-bold mb-2'>{item.name}</h1>
                            <p>{item.recipe.slice(0, 60)}</p>
                            <button onClick={()=>handleAddCart(item)} className='btn btn-outline text-yellow-500 border-b-2 border-r-transparent border-l-transparent border-t-transparent border-yellow-500 hover:text-yellow-500  mt-3'>Add Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CartProduct;