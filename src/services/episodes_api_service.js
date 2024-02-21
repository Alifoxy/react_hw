import axios from "axios";
import {EpisodesBaseURL} from "../constants/urls";

export const episodesAPIService = axios.create({baseURL:EpisodesBaseURL})