"use client";
import useAccounts from "@/hooks/useAccounts";
import React, { useEffect } from "react";

const Home = () => {
  const { userData } = useAccounts();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return <div>{}</div>;
};

export default Home;
