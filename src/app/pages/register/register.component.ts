import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/database.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  exportAs:'ngForm',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(public _data: DatabaseService,public UserData : NgForm) { 
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      fullname: new FormControl(),
    });
  }

  ngOnInit() {}
  async Register(UserData ){
   // this._data.Register(UserData.value.email,UserData.value.password);
   await this._data.Register(this.registerForm.value["email"],this.registerForm.value["password"]).then((value) => {
   });
   }

}
