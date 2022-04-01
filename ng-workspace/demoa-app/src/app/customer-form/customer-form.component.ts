import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  //data-model
  customerModel: any;
  constructor() { console.log('customer-form loaded') }

  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  saveCustomer(customerFormGroup:any){
    if (customerFormGroup.valid) {
      console.log(customerFormGroup.value)
    }
  }

}
