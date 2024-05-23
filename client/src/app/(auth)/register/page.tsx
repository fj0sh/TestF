"use client";
import { Button } from "@/components";
import useAccounts from "@/hooks/useAccounts";
import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const { registerAccount } = useAccounts();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  const submitHandler = () => {
    if (password !== confirmPassword) {
      toast.error("Password not Matched", { autoClose: 2000 });
    } else if (
      firstname.length == 0 ||
      lastname.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0 ||
      username.length == 0
    ) {
      toast.error("Input All Fields", { autoClose: 2000 });
    } else {
      toast.success("Account Registered");
      registerAccount(username, firstname, lastname, password);

      setTimeout(() => {
        router.push("/login");
      }, 4000);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss={false}
        transition={Slide}
      />
      <div className="flex flex-col gap-4 w-[30%] items-center border border-black p-10 rounded">
        <input
          className="border-black border w-[70%] h-[35px] p-3 rounded"
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className="border-black border w-[70%] h-[35px] p-3 rounded"
          type="text"
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          className="border-black border w-[70%] h-[35px] p-3 rounded"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-black border w-[70%] h-[35px] p-3 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border-black border w-[70%] h-[35px] p-3 rounded"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          title="Register"
          className="border-black border w-[50%] rounded p-1"
          onClick={() => submitHandler()}
        />
      </div>
    </div>
  );
};

export default Register;
