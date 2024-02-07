import axios from "axios";
import {UsersBaseURL} from "../constants/urls";

export const UsersAPIService = axios.create({baseURL:UsersBaseURL})