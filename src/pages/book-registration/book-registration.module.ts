import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookRegistrationPage } from './book-registration';

@NgModule({
  declarations: [
    BookRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(BookRegistrationPage),
  ],
})
export class BookRegistrationPageModule {}
