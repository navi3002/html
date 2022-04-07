import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, AbstractControlOptions } from '@angular/forms';
import {emailMatchValidator, rangeValidator} from '../my-validator'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

employeeFormGroup: FormGroup ;

empRecord: any = {
  firstName: 'Navith',
  lastName: 'Apzal',
  email: 'navithapzal@gmail.com',
  mobile: '6382945230'
}

  constructor( private fb: FormBuilder) { 
    this.employeeFormGroup = this.fb.group({
    firstName: [this.empRecord.firstName, [Validators.required, Validators.minLength(3)]],
    lastName: [this.empRecord.lastName],
    emailGroup: this.fb.group({
      email: [this.empRecord.email, [Validators.required,Validators.email]],
      confirmEmail: ['', [Validators.required,Validators.email]],
    },{validators:emailMatchValidator}),
    mobile: [''],
    sendNotification: ['email'],
    range: ['' , [rangeValidator(10,20)]]
  });
}

  ngOnInit(): void {
    
  }
  /* ! is non null assertion operator (pos-Fix expression)
  * - it just saying to type checker that you're sure that is a
  * not null or undefined.
  * the operation 'a!' produces a value of the type of 'a' with
  * null and undefined excluded
  * if a is of type string then a ensure thet it will return
  * a strINg value , and not NULL, OR UNDEFINED
  */
  get firstName() {return this.employeeFormGroup.get('firstName')!;}
  get email() {return this.employeeFormGroup.get('email')!;}
  get range() {return this.employeeFormGroup.get('range')!;}
  get emailGroup() {return this.employeeFormGroup.get('emailGroup')!;}
  get mobile() {return this.employeeFormGroup.get('mobile')!;}
  

  loadEmployee()
  {
    let data = {
      firstName: 'Navith',
      lastName: 'Apzal'
    }
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype:any){
    if(msgtype == 'sms'){
      let mobileControl= this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidator(8000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }
}
