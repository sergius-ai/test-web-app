import { Component } from '@angular/core';

interface JsTech {
  value: string;
  viewValue: string;
  version: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-web-app';
  selected = -1;
  jstechs: JsTech[] = [
    {value: '0', viewValue: 'Angular', version:[{v:'1.1.1'}, {v:'1.2.1'}, {v:'1.3.3'}]},
    {value: '1', viewValue: 'React', version:[{v:'2.1.2'}, {v:'3.2.4'}, {v:'4.3.1'}]},
    {value: '2', viewValue: 'Vue', version:[{v:'3.3.1'}, {v:'5.2.1'}, {v:'5.1.3'}]}
  ];
}
