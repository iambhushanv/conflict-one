import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.scss']
})
export class GetConfirmationComponent implements OnInit {

  constructor(private _matDialogRef : MatDialogRef<GetConfirmationComponent>) { }

  ngOnInit(): void {
  }

  onClose(flag : boolean){
this._matDialogRef.close(flag)
  }

}
