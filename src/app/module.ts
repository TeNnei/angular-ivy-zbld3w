import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Notificaitons } from './notifications.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Notificaitons],
  bootstrap:    [ Notificaitons ]
})
export class AppModule { }