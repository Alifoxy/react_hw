import axios from "axios";
import {CarsBaseURL} from "../constants/urls";

export const CarsAPIService = axios.create({baseURL:CarsBaseURL})