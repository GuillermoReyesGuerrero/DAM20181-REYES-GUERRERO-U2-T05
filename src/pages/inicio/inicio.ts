import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../service/user';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  public user:any = {
    ingcurp : ''
  }

  public ingresar:any = {
    si:false
  }

  ingcurp:String;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public Inguser:User) {
console.log(this.user.ingcurp);
   this.ingcurp = this.Inguser.ingcurp;
 this.ingcurp= this.ingcurp.substring(10,11);

 if(this.ingcurp=='H'){this.ingresar.si =true }else {this.ingresar.si =false};


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
  }
  
  Regresar():void{
      this.navCtrl.push(HomePage);
  }
}