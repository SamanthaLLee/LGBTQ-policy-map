import { Url } from "node:url";

export enum BillStatus {
    INTRODUCED,
    ENGROSSED,
    ENROLLED,
    PASSED,
    VETOED
    // ... map w/ API response
}

export interface IBillBasics {
    numPro: number
    numAnti: number
    bestStates: string[]
    worstStates: string[]
}

export interface IBillDetails {
    id: number
    status: BillStatus
    title: string
    description: string
    url: string
    date: string
    state: string
    party: string
}

