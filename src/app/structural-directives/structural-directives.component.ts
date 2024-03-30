import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  name = "siddhesh"

  employee = [
    {eName : 'sid', company : 'TCS', skills : ['java','springboot','angular']},
    {eName : 'perry', company : 'IBM', skills : ['node','express','react']},
    {eName : 'emmy', company : 'Infosys', skills : ['python','AI','BI']},

  ]
}
