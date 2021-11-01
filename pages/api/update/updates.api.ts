import { CreateUpdateDto } from "./dto/create-update.dto";
import { UpdateUpdateDto } from "./dto/update-update.dto";
import { Update } from "./update.entity";

export class UpdatesAPI{
    public static async getAllUpdates(): Promise<Update[]>{
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8000/update',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer' + token
            },
        })

        const data = await response.json();
        return data;
    }

    public static async createUpdate(createUpdateDto: CreateUpdateDto){
        const response = await fetch('http://localhost:8000/update',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(createUpdateDto)
        })

        // if(response.headers.get('content-type')?.includes('application/json')){
        //     const data = await response.json();
        //     return data;
        // } else {
        //     const data = await response.text();
        //     return data;
        // }
        
        const data = await response.json();
        return data;
        
    }

    public static async deleteUpdateById(id: string){
        const response = await fetch(`http://localhost:8000/update/${id}`,{
            method: 'DELETE',
        })

        const data = await response.json();
        return data;
    }

    public static async updateUpdate(id: string, updateUpdatesDto: UpdateUpdateDto){
        const { status } = updateUpdatesDto;
        const response = await fetch(`http://localhost:8000/update/${id}/status`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({status: `${status}`})
        })

        const data = await response.json();
        return data;
        
    }
}