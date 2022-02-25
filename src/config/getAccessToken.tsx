import React from "react";
import axios from 'axios';

export const getAccessToken = () =>{
    let token_get:any = sessionStorage.getItem('AccessToken') ? sessionStorage.getItem('AccessToken') : '';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token_get}` ;
}