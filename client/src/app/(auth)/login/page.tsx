"use client";
import { Button } from "@/components";
import useAccounts from "@/hooks/useAccounts";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const { loginAccount } = useAccounts();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginAccount(username, password);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-[30%]">
        <input
          type="text"
          className="border border-black rounded"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="border border-black rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title="Login"
          className="border border-black rounded"
          onClick={() => handleLogin()}
        />
      </div>
    </div>
  );
};

export default Login;
