import React, { useState } from 'react';
import { useForm } from "react-hook-form";



const Register = () => {
    const [boxValue, setBoxValue] = useState('');
    // const [searchedState, setSearchedState] = useState('');
    console.log(boxValue);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Hello");
        console.log(data);
    }

    // console.log(watch("example")); // watch input value by passing the name of it

    const states = ["Gujarat", "Maharashta", "Karnataka"];

    // const showSearchedData = () => {
    //     setSearchedState(states.find(state=>))
    // }


    return (
        <div className=''>
            {/* <div className="form-control">
                <label className="label">
                    <span className="label-text">State</span>
                </label>
                <input value={boxValue} onChange={(e) => setBoxValue(e.target.value)} type="text" placeholder="Enter your State Name" className="input input-bordered" />
            </div> */}
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
                                <input type="text" {...register("name")} placeholder="Enter your Name" className="input input-bordered" />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="Enter your Email" className="input input-bordered" />
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="Enter your Password" className="input input-bordered" />
                            </div>

                            {/* phone number */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" {...register("phone_number")} placeholder="Enter your Phone Number" className="input input-bordered" />
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
                            <div className='relative'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">State</span>
                                    </label>
                                    <input value={boxValue} onChange={(e) => setBoxValue(e.target.value)} type="text" placeholder="Enter your State Name" className="input input-bordered" />
                                </div>
                                <div className='absolute right-0 z-10 mr-10 bg-white w-[300px] m-3'>
                                    {
                                        states.filter(state => {
                                            const searchTerm = boxValue.toLocaleLowerCase();
                                            const statesName = state.toLocaleLowerCase();
                                            return searchTerm && statesName.startsWith(searchTerm) && searchTerm !== statesName
                                        }).slice(0, 10)
                                            .map((eachState, index) => <div
                                                onClick={() => {
                                                    setBoxValue(eachState)
                                                }}
                                            >
                                                {eachState}
                                            </div>)
                                    }
                                </div>
                            </div>

                            {/* <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div> */}
                            <input type="submit" className='btn btn-primary' value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;