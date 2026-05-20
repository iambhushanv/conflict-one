import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  isInEditmode : boolean=false
  @ViewChild("fname") fname!:ElementRef

  @ViewChild("isActive") isActive!:ElementRef


  @ViewChild("lname") lname!:ElementRef


  @ViewChild("email") email!:ElementRef


  @ViewChild("contact") contact!:ElementRef
  @Output()eventaddstudent:EventEmitter<Istd>=new EventEmitter<Istd>()

  constructor() { }

  ngOnInit(): void {
  }

  addstudent(){
    let new_student:Istd={
      fname:this.fname.nativeElement.value,
      lname:this.lname.nativeElement.value,
      email:this.email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      isActive:this.isActive.nativeElement.value==='true' ? true : false,
      stdId:Date.now().toString()
      
    }
    this.eventaddstudent.emit(new_student)
   this.fname.nativeElement.value=''
    this.lname.nativeElement.value=''
    this.email.nativeElement.value=''
    this.contact.nativeElement.value=''
   this.isActive.nativeElement.value==='true'

  }
}
