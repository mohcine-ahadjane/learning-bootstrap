import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BslearningComponent } from './components/bslearning/bslearning.component';

@NgModule({
  declarations: [
    AppComponent,
    BslearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, BslearningComponent]
})
export class AppModule { }
