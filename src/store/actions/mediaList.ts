import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAxiosAllMedia = createAsyncThunk(
    'mediaList/getAll',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/media/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token a3ce009643034a3dc227061545c95139a5891f6d',
                }
            });
        return response.data;
    }
)

export const getAxiosLast10Media = createAsyncThunk(
    'mediaList/getLast10',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/media/order?ordering=-date_posted', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token a3ce009643034a3dc227061545c95139a5891f6d',
            }
        });
        return response.data.slice(0,10);
    }
)

export const getAxiosMostPopularMedia = createAsyncThunk(
    'mediaList/getMostPopular',
    async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/media/order?ordering=-views_count', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token a3ce009643034a3dc227061545c95139a5891f6d',
            }
        });
        return response.data.slice(0,20);
    }
)