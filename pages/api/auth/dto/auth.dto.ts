// import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export interface AuthDto{
    // @IsString()
    // @MinLength(4)
    // @MaxLength(20)
    username: string;

    // @IsString()
    // @MinLength(8)
    // @MaxLength(32)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, //at least 1 upper case letter ,at least 1 lower case letter, at least 1 number or special character
    // { message: 'password is too weak'})
    password: string;
}