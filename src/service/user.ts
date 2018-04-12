import {  Injectable} from "@angular/core";

@Injectable()
export class User{
    private _curp:string;
    
    constructor(){
       
    }

    get ingcurp():string{
        return this._curp
    }
    set ingcurp(newVal:string){
        this._curp=newVal;
    }   
}