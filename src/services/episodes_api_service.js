import axios from "axios";
import {EpisodesBaseURL} from "../constants";

export const episodesAPIService = axios.create({baseURL:EpisodesBaseURL})