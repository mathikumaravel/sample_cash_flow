import React from "react";
import axios from 'axios';

export const getAccessToken = () =>{
    let token_get:any = localStorage.getItem('AccessToken') ? localStorage.getItem('AccessToken') : '';
    axios.defaults.headers.common['Authorization'] = token_get ;
}