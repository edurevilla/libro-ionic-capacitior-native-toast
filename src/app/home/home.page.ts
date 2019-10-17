import { Component } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toast: Toast) {}

  mostrarToast(){
    this.toast.show('Hola, soy un toast', '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      });
  }
 

}
