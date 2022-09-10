import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name;
  number;

  constructor(
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  register() {
    if (this.name && this.number) {
      localStorage.setItem('username', this.name);
      this.router.navigate(['/tabs']);
    } else {
      // alert('Plz Enter Usernane and password');
      this.presentAlert('Please enter username and password');
    }
  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      mode: 'ios',
      buttons: ['OK']
    });
    await alert.present();
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }

}
