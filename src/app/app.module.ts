import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'

import { Notificaitons } from './notifications.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    Notificaitons
    ],
  bootstrap:    [ Notificaitons ]
})
export class AppModule { }