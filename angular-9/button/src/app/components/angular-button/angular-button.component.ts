import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-button',
  templateUrl: './angular-button.component.html',
  styleUrls: ['./angular-button.component.css']
})
export class AngularButtonComponent implements OnInit {
  @Input() message: string = 'Domyślna wiadomość';
  @Input('styleobject') set setStyleObject(objectString: string) {
    this.styleObjectParsed = JSON.parse(objectString);
  }
  @Output() onAngularEvent: EventEmitter<string> = new EventEmitter();
  styleObjectParsed: {backgroundColor: string, color: string} = {
    backgroundColor: '#f00',
    color: '#444'
  };

  constructor() {
  }

  onClickButton() {
    this.onAngularEvent.emit();
  }

  ngOnInit() {
  }
}
