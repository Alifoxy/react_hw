import axios from "axios";
import {JsonBaseURL} from "../constants/urls";

export const jsonAPIService = axios.create({baseURL:JsonBaseURL})