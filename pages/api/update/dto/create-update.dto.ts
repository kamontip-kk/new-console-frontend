// import { IsNotEmpty } from "class-validator";

export interface CreateUpdateDto{
    // @IsNotEmpty()
    img: string;

    // @IsNotEmpty()
    title: string;

    // @IsNotEmpty()
    subtitle: string;

    url: string;
}