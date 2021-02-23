import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name: string;
  mainuser: AngularFirestoreDocument;
  sub
  constructor(public _data: DatabaseService,private afs: AngularFirestore,) {

    this.mainuser = afs.doc(`users/${_data.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.name = event.username
		
		})

    
   }

  ngOnInit() {
  }

//async  update(name){
 // await this._data.updatePassword(this.name)

  //}


}
