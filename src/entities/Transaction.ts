import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import { Client } from "./Client";

export enum TransactionTypes{
    Deposit = 'deposit',
    Withdraw = 'withdraw'
}

@Entity("transaction")
export class Transaction extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    @ManyToOne(
        () => Client,
        client => client.transaction
    )

    @JoinColumn({
        name: 'client_id'
    })
    client = Client 
}