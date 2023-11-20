import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
    const [captchaVerify, setCaptchaVerify] = useState(false)
    const captchaReload = useRef()
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value

        login(email, password)
        .then(res => {
            swal('success', 'Login Success fully', 'success')
            navigate(`${location?.state?.from?.pathname}`)
        })
        .catch(error => console.log(error))
    }

    const handleCaptcha = (e) => {
        e.preventDefault()
        const captchaValue = e.target.value

        let user_captcha_value = captchaValue;

        if (validateCaptcha(user_captcha_value, false) == true) {
            setCaptchaVerify(true)
        }

        else {
            setCaptchaVerify(false)
        }

    }

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    return (
        <div className=" bg-[url('https://i.ibb.co/9g25Q2G/authentication.png')] h-screen">
            <div className="mx-32 pt-16">
                <div className="flex items-center py-16 px-20 rounded-3xl shadow-2xl bg-[url('https://i.ibb.co/9g25Q2G/authentication.png')]">
                    <img className="w-[400px] rounded-lg" src="https://i.ibb.co/9nZMszC/authentication1.png" alt="" />
                    <div className="ml-10 w-full">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
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
                            <div className='mb-3'>
                                <button type='button' onClick={() => {
                                    captchaReload.current.value = ''
                                }}><LoadCanvasTemplate ></LoadCanvasTemplate></button>
                            </div>
                            <div className="form-control">
                                <input ref={captchaReload} onChange={handleCaptcha} type="text" placeholder="Type Captcha value" className="px-4 mb-5 outline-none py-3 rounded-lg text-slate-500" name="captcha" required />
                            </div>
                            <div>
                                {
                                    captchaVerify ? <input className='btn bg-[#D1A054B2] w-full text-white hover:text-black' type="submit" value="Login" /> : <input className='btn bg-[#D1A054B2] w-full text-white' disabled type="submit" value="Login" />
                                }
                            </div>
                            <div>
                                <p className='mt-3 text-center mb-2'>New hare <Link to='/register' className='text-blue-500 font-bold'>Create a New Account</Link></p>
                                <p className='text-center'>Or Sign in With</p>
                                <div className='flex justify-center gap-x-4'>
                                    <button><FaGoogle className=' mt-2 text-3xl text-blue-500'></FaGoogle></button>
                                    <button><FaFacebook className=' mt-2 text-3xl text-blue-500'></FaFacebook></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;