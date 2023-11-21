import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import CartTitle from "../../Shared/CartTitle/CartTitle";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";
import { useState } from "react";

const MyCart = () => {
    const [cart, refetch, isLoading] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total , item)=> total + item.price, 0)
    
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/carts/delete?id=${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Successfully Delete", {
                                    icon: "success",
                                });
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))
                }
            });

    }

    return (
        <div>
            <div className="mt-[-25px]">
                <CartTitle shortTitle='My Cart' heading='WANNA ADD MORE?'></CartTitle>
            </div>
            <div className="my-5 ml-5 flex justify-between">
                <h1 className="text-3xl font-bold">Total Orders: {cart.length}</h1>
                <h1 className="text-3xl font-bold">Total Price: {totalPrice}</h1>
                <button className="btn bg-[#D1A054] text-lg font-bold text-white hover:text-black">PAY</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            <p>{index + 1}</p>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="font-bold">{item.name}</p>
                                        </td>
                                        <td className="font-bold">$ {item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn text-white hover:text-black bg-red-500 text-xl"><MdDelete></MdDelete></button>
                                        </th>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
