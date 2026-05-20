


import {
  Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, Input, SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit, OnChanges {
  @Input() editObj!: Istd;


  @Output() eventaddstudent: EventEmitter<Istd> = new EventEmitter<Istd>()

  isInEditMode: boolean = false;

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitUpdatedObj: EventEmitter<Istd> = new EventEmitter<Istd>()

  constructor() { }
  ngOnInit(): void { }
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

    let val1: string = this.fname.nativeElement.value;
    let val2: string = this.lname.nativeElement.value;
    let val3: string = this.email.nativeElement.value;
    let val4: string = this.contact.nativeElement.value;
    if (val1.length > 0 && val2.length > 0 && val3.length && val4.length > 0) {
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

  addstudent() {
    let new_student: Istd = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'true' ? true : false,
      stdId: Date.now().toString()

    }
    this.eventaddstudent.emit(new_student)
    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.isActive.nativeElement.value === 'true'
    this.isInEditMode= false

  }
}
