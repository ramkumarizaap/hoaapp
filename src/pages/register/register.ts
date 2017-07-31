import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController   } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	public id;
  public base64Image;

  constructor(public navCtrl: NavController,public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public camera: Camera) {
  		this.id = navParams.get("id");
  }

  showAction()
  {
  	let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Profile Photo',
      buttons: [
        {
          text: 'Take a Picture',
          handler: () => {
          	alert("Camera");
          	
          	/* Camere Will Open*/
          	const options: CameraOptions = {
							  quality: 100,
							  sourceType: this.camera.PictureSourceType.CAMERA,
							  destinationType: this.camera.DestinationType.DATA_URL,
							  encodingType: this.camera.EncodingType.JPEG,
							  mediaType: this.camera.MediaType.PICTURE
							}
					    this.camera.getPicture(options).then((imageData) => {
								 // imageData is either a base64 encoded string or a file URI
								 // If it's base64:
								 this.base64Image = 'data:image/jpeg;base64,' + imageData;
								 alert(this.base64Image);
								}, (err) => {
								 	alert(err);
								});

          }
        },{
          text: 'Choose from Gallery',
          handler: () => {
            alert("Gallery");
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }
}