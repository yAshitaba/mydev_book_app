import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
          name: 'adminid'
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
              //管理者コードが適切であれば処理を実施
            }
          }
        }
      ]
    });

    alert.present();
  }

}
