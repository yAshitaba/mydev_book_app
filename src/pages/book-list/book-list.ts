import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { BOOKS } from '../../app/mock-books';
import { Book } from '../../app/book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList = BOOKS;
  grid: Array<Array<Book>> = new Array<Array<Book>>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    // 3列の一覧に表示させるための準備
    let coulumnNum = 3; //カラム数
    for (let i = 0; i < this.bookList.length; i += coulumnNum) {
      let row = this.bookList.slice(i, i + coulumnNum);
      this.grid.push(row);
    }
  }

  askAdminId() {
    let alert = this.alertCtrl.create({
      title: '管理者コードを入力してください。',
      inputs: [
        {
          name: 'adminid',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'ログイン',
          handler: data => {
            if (data.adminid == '0') {
              //管理者コードが適切であれば登録方法を選択させる
              this.presentActionSheet();
            }
          }
        }
      ]
    });

    alert.present();
  }

  presentActionSheet() {
    this.actionSheetCtrl.create({
      title: '登録方法を選択してください。',
      buttons: [
        {
          text: 'バーコードスキャン登録',
          role: 'barcode-scan-register',
          handler: () => {
            console.log('barcode-scan-register');
          }
        },
        {
          text: '手動登録',
          role: 'manual-register',
          handler: () => {
            console.log('manual-register');
          }
        },
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }

      ]
    })
  }

}
