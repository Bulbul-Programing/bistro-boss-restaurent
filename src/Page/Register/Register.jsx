import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';
import swal from 'sweetalert';


const Register = () => {

    const {signInEmail, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        
        signInEmail(email, password)
        .then(res => {
            
            if(res.user.accessToken){
                updateUser(name)
                .then(res => console.log(res))
                .catch(error => console.log(error))
                swal("Success", "Account create successfully", "success");
                navigate('/')
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className=" bg-[url('https://i.ibb.co/9g25Q2G/authentication.png')] h-screen">
            <div className="mx-32 pt-16">
                <div className="flex items-center py-16 px-20 rounded-3xl shadow-2xl bg-[url('https://i.ibb.co/9g25Q2G/authentication.png')]">
                    <div className="mr-10 w-full">
                        <h1 className="text-4xl font-bold text-center">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="px-4 outline-none py-3 rounded-lg text-slate-500" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="px-4 outline-none py-3 rounded-lg text-slate-500" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="px-4 mb-3 outline-none py-3 rounded-lg text-slate-500" name="password" required />
                            </div>
                            <div>
                                <input className='btn bg-[#D1A054B2] w-full text-white hover:text-black' type="submit" value="Register" />
                            </div>
                            <div>
                                <p className='mt-3 text-center mb-2'>Already register <Link to='/login' className='text-blue-500 font-bold'>Go to Login</Link></p>
                                <p className='text-center'>Or Sign in With</p>
                                <div className='flex justify-center gap-x-4'>
                                    <button><FaGoogle className=' mt-2 text-3xl text-blue-500'></FaGoogle></button>
                                    <button><FaFacebook className=' mt-2 text-3xl text-blue-500'></FaFacebook></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <img className="w-[400px] rounded-lg" src="https://i.ibb.co/9nZMszC/authentication1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;