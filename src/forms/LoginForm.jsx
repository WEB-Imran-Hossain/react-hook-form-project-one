import React from "react";
import FieldSet from "../components/FieldSet";
import Field from "../components/Field";

const LoginForm = () => {
    return (
        <div>
            <form>
                <FieldSet label="Enter Login Details">
                    {/* email section */}
                    <Field label="Email">
                        <input
                            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"

                        />
                    </Field>
                    {/* pasword section */}
                    <Field label="Password">
                        <input
                            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
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
