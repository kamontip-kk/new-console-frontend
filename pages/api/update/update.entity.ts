// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UpdateStatus } from "./update-status.enum";

// @Entity()
export interface Update{
    // @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column()
    img: string;

    // @Column()
    title: string;

    // @Column()
    subtitle: string;

    // @Column()
    url: string;

    // @Column()
    status: UpdateStatus
}