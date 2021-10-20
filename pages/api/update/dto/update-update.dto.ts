// import { IsEnum } from "class-validator";
import { UpdateStatus } from "../update-status.enum";

export interface UpdateUpdateDto{
    // @IsEnum(UpdateStatus)
    status: UpdateStatus;
}