import { UpdateProps, CreateUpdateProps, UpdateUpdateProps } from "./create.model";
import axios from '../../config/axios';

export function getUpdate(): Promise<UpdateProps[]> {
  return axios.get('/update')
}

export function createUpdate(createUpdateProps: CreateUpdateProps): Promise<any> {
    return axios.post('/update', {...createUpdateProps})
}

export function updateUpdate(id:string, updateUpdateProps:UpdateUpdateProps): Promise<any> {
    return axios.patch(`/update/${id}/status`, {...updateUpdateProps})
}

export function deleteUpdate(id:string): Promise<any> {
    return axios.delete(`/update/${id}`)
}