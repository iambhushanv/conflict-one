import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss'],
})
export class StdTableComponent implements OnInit {
  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>();

  @Input() getstdArr!: Array<Istd>;

  @Output() emiteditObj: EventEmitter<Istd> = new EventEmitter<Istd>();
  constructor(private _matDialogBox: MatDialog) {}

  ngOnInit(): void {}

  onEditTodo(editObj: Istd) {
    this.emiteditObj.emit(editObj);
  }

  onRemoveStudent(studId: string) {
    let matConfig = new MatDialogConfig();
    matConfig.width = '400px';
    matConfig.disableClose = true;
    let matDialogRef = this._matDialogBox.open(
      GetConfirmationComponent,
      matConfig,
    );
    matDialogRef.afterClosed().subscribe((getConfirm) => {
      if (getConfirm === true) {
        this.emitRemoveId.emit(studId);
      }
    });
  }
}
