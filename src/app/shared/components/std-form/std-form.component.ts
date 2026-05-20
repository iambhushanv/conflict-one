import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Istd } from '../../models/std';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit, OnChanges {
  @Input() editObj!: Istd;

  isInEditMode: boolean = false;

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitUpdatedObj : EventEmitter<Istd> = new EventEmitter<Istd>()

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['editObj'].currentValue) {
      this.isInEditMode = true;
      this.fname.nativeElement.value = this.editObj.fname;
      this.lname.nativeElement.value = this.editObj.lname;
      this.email.nativeElement.value = this.editObj.email;
      this.contact.nativeElement.value = this.editObj.contact;
      this.isActive.nativeElement.value = this.editObj.isActive;
    }
  }

  onUpdatestd() {
    let UPDATED_OBJ = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      stdId: this.editObj.stdId,
      isActive: this.isActive.nativeElement.value === 'true' ? true : false,
    };

    this.emitUpdatedObj.emit(UPDATED_OBJ);


  }
}
