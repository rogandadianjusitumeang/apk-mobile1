import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
kode: string = '';
nama: string = '';
harga: string = '';
stok: string = '';
constructor(
private router: Router,
public toastController: ToastController,
private postPvdr: PostProvider,
) {
  
    
  }

  ngOnInit() {
  }

  async addRegister() {
    if (this.kode == '') {
      const toast = await this.toastController.create({
      message: 'kode lengkap harus di isi',
      duration: 2000
      });
      toast.present();
    } else if (this.nama == '') {
      const toast = await this.toastController.create({
        message: 'No HP/WA harus di isi',
        duration: 2000
        });
      toast.present();
    } else if (this.harga == '') {
      const toast = await this.toastController.create({
        message: 'harga harus di isi',
        duration: 2000
        });
      toast.present();

    } else if (this.stok == '') {
      const toast = await this.toastController.create({
        message: 'Password harus di isi',
        duration: 2000
        });
      toast.present();

    } else {
      let body = {
        kode: this.kode,
        nama: this.nama,
        harga: this.harga,
        stok: this.stok,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/tab4']);
         const toast = await this.toastController.create({
          message: 'Selamat! Registrasi barang sukses.',
          duration: 2000 
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
       }
     });

    }
  }
 
}  