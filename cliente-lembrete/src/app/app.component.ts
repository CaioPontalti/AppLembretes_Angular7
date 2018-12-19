import { Component, ViewChild, Input } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "CRUD de Lembretes com Angular 7";
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(){ }

}
