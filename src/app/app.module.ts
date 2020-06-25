import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import {FormsModule} from '@angular/forms';
import { AlignmentButtonComponent } from './components/alignment-button/alignment-button.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, AlignmentButtonComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
