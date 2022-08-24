export interface IUser
{
    firstname: string;
    lastname: string;
    address: string;
    email: string;
}

export interface IPost
{
    author: string;
    title: string;
    details: string;
    pictures: Array<string>;
    urgency: number;
    rate: number;
}

export interface IJob
{

}
export interface ICompany
{
    
}

export interface ITechnician
{

}

const Pole = { nord: 'N', sud: 'S', est: 'E', ouest: 'W' }

export interface ILocation
{
    pole: string;
    degree: number;
    minute: number;
    second: number;
}
export interface IPosition
{
    lattitude: ILocation;
    longitude: ILocation;
}

