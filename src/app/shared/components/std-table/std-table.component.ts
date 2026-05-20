import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Output() emitRemoveId: EventEmitter<string>= new EventEmitter<string>()
  
  @Input() getstdArr !: Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }
onRemoveStudent(studId:string){
  this.emitRemoveId.emit(studId);
  
}
}
 

   