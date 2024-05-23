"use client";
import useAccounts from "@/hooks/useAccounts";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  router.push("/login");

  return <div></div>;
};

export default Home;
