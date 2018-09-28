import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {

  }

  async scanBarcode() {
    console.log('aaa');
    const result = await this.barcode.scan();
    console.log(result);

  }
}
