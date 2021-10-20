import { AuthDto } from "./dto/auth.dto";

export class AuthAPI{
    public static async signUp(authDto: AuthDto){
        const response = await fetch('http://localhost:8000/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(authDto)
        })
        // .then((response) => response.text())
        // .then((text) => text.length? JSON.parse(text) : {})
        // .catch((error) =>{
        //     throw error;
        // })

        // const data = await response.json();
        // return data;

        if(response.headers.get('content-type')?.includes('application/json')){
            const data = await response.json();
            return data;
        } else {
            const data = await response.text();
            return data;
        }

    }

    public static async signIn(authDto: AuthDto){
        const response = await fetch('http://localhost:8000/auth/signin',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(authDto)
        })

        const data = await response.json();

        // localStorage.setItem('token',data.accessToken)
        return data;
        
    }
}