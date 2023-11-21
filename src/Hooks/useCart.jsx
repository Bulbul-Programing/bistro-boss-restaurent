import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {refetch, data: cart = [], isLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`cartItem/${user.email}`)
            return res.data
        }
    })
    return [cart, refetch, isLoading]
};

export default useCart;