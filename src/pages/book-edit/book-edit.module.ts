import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookEditPage } from './book-edit';

@NgModule({
  declarations: [
    BookEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BookEditPage),
  ],
})
export class BookEditPageModule {}
