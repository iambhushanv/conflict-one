import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() getstdArr !: Array<Istd>

  @Output() emiteditObj : EventEmitter<Istd> = new EventEmitter<Istd>() 
  constructor() { }

  ngOnInit(): void {
  }

  onEditTodo(editObj : Istd){
   this.emiteditObj.emit(editObj)
  

  }

}
