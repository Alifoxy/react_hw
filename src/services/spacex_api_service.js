import axios from "axios";
import {SpaceXBaseURL} from "../constants/urls";

export const SpaceXAPIService = axios.create({baseURL:SpaceXBaseURL})