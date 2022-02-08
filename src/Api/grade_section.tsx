import {useState} from 'react'
import { getAccessToken } from "../config/getAccessToken";
import axios from "axios";
import {baseUrl} from "../index"

export const getAllGradeSectionShow = () => {
        getAccessToken();
      return  axios.get(`${baseUrl}academic_year/show`)  
};

export const getAllGradeSectionAdd = () => {
        //getAccessToken();
      return  axios.post(`${baseUrl}grade_section/create`)  
};