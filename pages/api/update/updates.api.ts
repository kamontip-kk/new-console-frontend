import { CreateUpdateDto } from "./dto/create-update.dto";
import { UpdateUpdateDto } from "./dto/update-update.dto";
import { Update } from "./update.entity";

export class UpdatesAPI{
    public static async getAllUpdates(): Promise<Update[]>{
        const response = await fetch('http://localhost:8000/update',{
            method: 'GET',
            // headers: {
            //     Authorization: 'Bearer' + token
            // },
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

    // public static async updateUpdate(id: string, updateUpdatesDto: UpdateUpdateDto): Promise<Update>{
    //     const { status } = updateUpdatesDto;
    //     const response = await fetch('http://localhost:8000/update',{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //         },
    //         body: JSON.stringify(status)
    //     })

    //     const data = await response.json();
    //     return data;
        
    // }

    // public static async deleteUpdateById(id: string): Promise<void>{
    //     const response = await fetch('http://localhost:8000/update',{
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //         },
    //         body: JSON.stringify(id)
    //     })

    //     const data = await response.json();
    //     return data;
        
    // }
}