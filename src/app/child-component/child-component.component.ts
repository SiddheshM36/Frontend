import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() parentData : string = ""; 

  @Output() sentData = new EventEmitter<string>();

  constructor(){}

    ngOnInit(): void {

      const childData = "Data is coming from child";
      this.sentData.emit(childData);
    }
    
  

}
