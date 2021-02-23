import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import{AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

 interface user{
  name:string;
  surname:string;
  address:string;
  phone:string;
  uid: string
  
  }

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private user: user
 msg="email and password and match";
 public credd;
 public updatee;
 
  constructor(public fireAuth: AngularFireAuth, public _fire:AngularFirestore,private Toast:ToastController) {
  
   }

  

  async  Register(email,password){
    
  await this.fireAuth.createUserWithEmailAndPassword(email,password).then( async cred=>{
     // Here we need to get additional user details and save them in the DB under uid
      // from success.user.uid

      //----for email verification
      
      const uid=cred.user.uid;
      
      
   
      
      
     cred.user.sendEmailVerification();

      console.log('succeful registerd user',cred)
      
        await this.Toast.create({
        
          message:"succeful registerd user",
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
      



    }).catch(async err=>{
      console.log('Error',err.message)
      console.log('Error',err.code)


      await this.Toast.create({
        
        message:err.message,
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




    })
 
  
  }
 
  
	//async updatePassword(name: string) {
   // return  await this.fireAuth.currentUser.updatePassword(name)
    
    
 // }
  getUID(): string {
		return this.user.uid;
	}
}
