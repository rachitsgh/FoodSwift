import { Router } from "express";
import {sample_users} from '../data.js';
import jwt from 'jsonwebtoken;'

const router=Router();

router.post('/login',(req,res) =>{
    const {email,password} = req.body;

    const user=sample_users.find(
        user=> user.email=== email && user.password===password
    );
    
    if(user){

    }
});

//const gener