import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // 2列の一覧に表示させるための準備
    let coulumnNum = 2; //カラム数
    for (let i = 0; i < this.bookList.length; i += coulumnNum) {
      let row = this.bookList.slice(i, i + coulumnNum);
      this.grid.push(row);
    }
  }

}
