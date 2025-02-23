import axios from 'axios';
import { Region } from './dto/region';

export async function searchRegions(): Promise<Region[]> {
    try {
        const response = await axios.get<Region[]>('localhost:8080/api/regions/findAll'); 
        return response.data;
    } catch (error) {
        console.error('Error fetching regions:', error);
        return [];
    }
}
