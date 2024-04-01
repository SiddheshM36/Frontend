import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = 'siddhesh mhatre'

  student = {
    name : 'sid',
    comp : 'TCS',
    sal : 1000
  }
}
