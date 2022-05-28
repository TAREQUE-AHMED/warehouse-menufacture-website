import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
// import useToken from '../../CustomHooks/useToken';
import Loading from '../Loading/Loading';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
     // sign in with google
    const
        [
            signInWithGoogle,
            gUser,
            gLoading,
            gError
        ] = useSignInWithGoogle(auth);
    
    //   sign in with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] = useToken(user || gUser);

    let signInError;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [navigate, from])
    
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    


    if (error || gError ) {
        signInError = <p className='text-red-500 mb-2'><small>{error?.message}</small></p>
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto md:mt-32 mb-10">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-primary">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-primary">Email <span className='text-red-500'>*</span></span>
                        </label>
                        <input type="email" className="py-3 border-2 border-gray-500 rounded w-full max-w-xs"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: "Email is require"
                                  },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                             })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-primary">Password <span className='text-red-500'>*</span></span>
                        </label>
                        <input type="password" className="py-3 border-2 border-gray-500 rounded w-full max-w-xs"
                            {...register("password", { 
                                required: {
                                    value: true,
                                    message: "Password is require"
                                  },
                                minLength: {
                                    value: 6,
                                    message: 'Must be use 6 characters password'
                                }
                             })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full max-w-xs bg-primary text-white' type="submit" value="Login" />
                    <p className='mt-5 text-lg'><Link to={'/signup'}><small className='text-primary font-bold'>Create new account</small></Link> with Laptop Pro</p>
                </form>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:bg-primary hover:text-white">Login with Google</button>
            </div>    
        </div>
    );
};

export default Login;