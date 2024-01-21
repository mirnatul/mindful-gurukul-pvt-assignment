import React from 'react';
import { useForm } from "react-hook-form";



const Register = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Hello");
        console.log(data);
    }

    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div className=''>
            <h2>Register</h2>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[500px]">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Enter your Name" className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="Enter your Email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="Enter your Password" className="input input-bordered" required />
                            </div>
                            {/* phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" {...register("phone_number")} placeholder="Enter your Phone Number" className="input input-bordered" required />
                            </div>

                            {/* gender - radio button */}
                            <div className='my-10'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Male</span>
                                        <input type="radio" {...register("gender")} value="male" className="radio checked:bg-red-500" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Female</span>
                                        <input type="radio" {...register("gender")} value="female" className="radio checked:bg-blue-500" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Others</span>
                                        <input type="radio" {...register("gender")} value="others" className="radio checked:bg-green-500" />
                                    </label>
                                </div>
                            </div>

                            {/* checkbox */}
                            <div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">LinkedIn</span>
                                        <input type="checkbox" {...register("reference")} value="linkedin" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Friends</span>
                                        <input type="checkbox" {...register("reference")} value="friends" className="checkbox" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Job Portal</span>
                                        <input type="checkbox" {...register("reference")} value="job_portal" className="checkbox" />
                                    </label>
                                </div>
                            </div>

                            {/* drop-down city */}
                            <select {...register("city")} className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select your city?</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Ahmedabad</option>
                            </select>

                            {/* auto suggested city */}
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>
                            <input type="submit" className='btn btn-primary' value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;