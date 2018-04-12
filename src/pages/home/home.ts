import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Inicio } from './../inicio/inicio';

import { User } from '../../service/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user:any = {
    ingcurp : ''
  }

  constructor(public navCtrl: NavController,public  Inguser:User) {
 this.Inguser.ingcurp = "";
  }

  Ingresar():void{
    this.Inguser.ingcurp=this.user.ingcurp;
      this.navCtrl.push(Inicio);

   

  }

}
