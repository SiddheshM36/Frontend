import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  name = 'siddhesh'
  isDisabled = true;
  isColored = false;
inputText = "sid";

onChange() {
  console.log('Input value changed:', this.inputText);
}
}
