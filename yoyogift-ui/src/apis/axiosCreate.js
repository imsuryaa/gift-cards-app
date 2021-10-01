import axios from 'axios';
import { apiURL } from '../config/constants'
export default axios.create({
    baseURL: apiURL
});