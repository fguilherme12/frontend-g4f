import axios from "axios";
import { News } from "../types/NewsTypes";

const API_URL = 'http://localhost:3001/news'

export const getNews = async(): Promise<News[]> => {
    const response = await axios.get(API_URL)
    return response.data;
}

export const getNewsById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data;
}

export const createNews = async (news: {title: string; description: string}) => {
    const response = await axios.post(API_URL, news)
    return response.data;
}

export const updateNews = async (id: number, news: {title: string, description: string}) => {
    const response = await axios.put(`${API_URL}/${id}`, news)
    return response.data;
}

export const deleteNews = async(id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data;
}