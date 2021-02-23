import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import{Platform,ToastController} from '@ionic/angular';
import {ToastOptions} from '@ionic/core'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  verifiedemail:true;
  public registerForm: FormGroup;
  reactiveForm: FormGroup;
  constructor(public _data: DatabaseService,private Platform:Platform,private Toast:ToastController,private router:Router) { 
   
    this.registerForm = new FormGroup({
      email: new FormControl(null,[Validators.required,this.emailcheck]), 
     password: new FormControl(null,[Validators.required,this.passwordcheck]),
      passwordd: new FormControl(null,[Validators.required,this.passwordcheck]),
      fullname: new FormControl(),
    });
   this.registerForm.controls.password.valueChanges.subscribe(
      x=>this.registerForm.controls.passwordd.updateValueAndValidity()
    )
 
    
     
   
  }
  async showToast(){
    await this.Toast.create({
    
      message:"registered",
      duration:2000,
      position:"middle",
      buttons:[{
        text:'ok',
        handler: ()=>{
          console.log("ok clicked");
        }
      }]

    }

    ).then(res=>res.present());
  }

  ngOnInit() {
  }
  verification(){
   
  }
  emailcheck(controls){
    if(controls.value != null){
    
var regexp = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
if(regexp.test(controls.value) !==true ){
  return{
    emailValidity:true
  }
}
    }

  }
  passwordcheck(controls){
    if(controls.value !=null){
   var conPass=controls.value;
   var pass=controls.root.get('password');
   if(pass){
 var password=pass.value;
 if(conPass !=="" && password !==""){
if(conPass !== password){
return{
  passwordValidity:true
}
}
else{
  return null
  
}
 }
   }
    }

  }

  async Register(UserData ){
    if(this.registerForm.status == "VALID"){
     
     
    
       // this._data.Register(UserData.value.email,UserData.value.password);
    await this._data.Register(this.registerForm.value["email"],
    this.registerForm.value["password"]).then((value) => {
    });
    }
    else{
      this.registerForm.get('email').markAsTouched();
      this.registerForm.get('password').markAsTouched();
    }
   
    }

}
