import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from 'react-hook-form'

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()


    const submitForm = (formData) => {
        console.log(formData);
    }


    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label="Enter Login Details">
                    {/* email section */}
                    <Field label="Email" error={errors.email}>
                        <input
                            {...register("email", { required: "Email is required." })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"

                        />
                    </Field>
                    {/* pasword section */}
                    <Field label="Password" error={errors.password}>
                        <input
                            {...register("password", {
                                required: "Password is required.",
                                minLength: {
                                    value: 8,
                                    message: "Your password must be at least 8 characters",
                                }
                            })}
                            className={`p-2 border box-border w-[300px] rounded-md ${!!errors.password ? "border-red-500" : "border-gray-200"}`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"

                        />
                    </Field>
                </FieldSet>
                <Field>
                    <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500">
                        Login
                    </button>
                </Field>
            </form>
        </div>
    );
};

export default LoginForm;
