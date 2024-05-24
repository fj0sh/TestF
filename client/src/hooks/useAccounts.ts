import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accounts from '@/interface/accounts';

const req =  axios.create({baseURL: process.env.URL})

const useAccounts = () => {
    const [userData, setUserData] = useState<Accounts[]>();
    const [status, setStatus] = useState<number | null>(null);

    const displayUsers = async() => {
        try {
            const res = await req.get("/")
            setUserData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const registerAccount = async(username:string, first_name:string, last_name:string, password:string) => {
        try {
            const res = await req.post("/register", {username: username, first_name:first_name, last_name:last_name, password:password }, {headers:{"Content-type": "application/json"}});
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const loginAccount = async(username:string, password:string) => {
        try {
            const res = await req.post("/login", {username: username, password:password }, {headers:{"Content-type": "application/json"}});
            console.log(res.status);
            setStatus(res.status)
        } catch (error) {
            if(axios.isAxiosError(error)){
                setStatus(error.response?.status ?? 400);
            }            
        }
    }

    useEffect(() => {
        displayUsers();
        console.log(process.env.URL);
    }, []);
 
    return{userData, displayUsers, registerAccount, loginAccount, status};
}

export default useAccounts;
