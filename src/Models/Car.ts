import { Photo } from './Photo';
import { Brand } from "./Brand";
import { Detail } from "./Detail";


export class Car{
    id:number=0;
    name:string="";
    color:string="";
    price:number=0;
    bestSeller:boolean=false;
    BrandId:number=0;
    brand!:Brand;
    photoes:Photo[]=[];
    details:Detail={
        id:0,
        description:"",
        modelYear:0,
        maxPower:0,
        torque:0,
        length:0,
        width:0,
        height:0,
        curbWeight:0,
        batteryEnergy:0,
        cltC_CruisingRange:0,
        maximumSspeed:0,
        cameras:0,
        acceleration:0,
        panoramic:"",
        carId:0}
}

export class car{
    id:number=0;
    name:string="";
    color:string="";
    price:number=0;
    brandId:number=0;
    bestSeller:boolean=false;
    
}