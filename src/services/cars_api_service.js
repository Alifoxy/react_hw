import axios from "axios";
import {EpisodesBaseURL} from "../constants";

export const carsAPIService = axios.create({baseURL:EpisodesBaseURL})