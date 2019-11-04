import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  username: string;
  
  constructor(
  	private router: Router,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'Logout com Sucesso',
        duration: 3000
      });
    toast.present();
  }

}
