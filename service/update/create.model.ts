import { UpdateStatus } from "./update-status.enum";

export interface UpdateProps{
    id: string;
    img: string;
    title: string;
    subtitle: string;
    url: string;
    status: UpdateStatus
}

export interface CreateUpdateProps {
    img: string;
    title: string;
    subtitle: string;
    url: string;
}

export interface UpdateUpdateProps{
    status: UpdateStatus;
}