import {useState} from 'react'
import { getAccessToken } from "../config/getAccessToken";
import axios from "axios";
import {baseUrl} from "../index"

export const getAllGradeSectionShow = () => {
        getAccessToken();
      return  axios.get(`${baseUrl}gradeSection`)  
};

export const getAllGradeSectionAdd = () => {
        //getAccessToken();
      return  axios.post(`${baseUrl}gradeSection`)  
};