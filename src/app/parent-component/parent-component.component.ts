import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  name = 'siddhesh is learning angular'


  receivedData: string = '';
    
  onDataReceived(data : string){
    console.log(data)
    this.receivedData = data

}
}
