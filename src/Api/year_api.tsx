import { getAccessToken } from "../config/getAccessToken";
import axios from "axios";
import {baseUrl} from "../index"

export const getAllAcademicYear = () => {
        getAccessToken();
      return  axios.get(`${baseUrl}academic_year/show`)  
};
