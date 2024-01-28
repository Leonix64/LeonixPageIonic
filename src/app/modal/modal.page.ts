import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalImageService } from '../services/modal-image.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  base64Image: string | null = null;
  newImageBase64: string | null = null;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private modalService: ModalImageService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getUserImage();
  }

  async onUpload() {
    if (this.newImageBase64) {
      try {
        const token = localStorage.getItem('authToken') || '';
        const response = await this.modalService.uploadImage(this.newImageBase64, token).toPromise();
        // console.log('OnUpload successful', response);
        this.modalController.dismiss();

        // Recargar la página manualmente
        // window.location.reload();

        const toast = await this.toastController.create({
          message: 'Imagen subida exitosamente. Recargue la página para notar los cambios.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      } catch (error) {
        console.error('Error al subir la imagen:', error);
        // Manejar el error
        const toastError = await this.toastController.create({
          message: 'Error al subir la imagen. Por favor, inténtelo de nuevo.',
          duration: 3000,
          position: 'bottom',
          color: 'danger'
        });
        toastError.present();
      }
    }
  }


  onCancel() {
    this.modalController.dismiss();
  }

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelect(event: any) {
    //console.log('Archivo seleccionado: ', event.target.files[0]);
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const base64Image = files[0];
      this.convertImageToBase64(base64Image);
    }
  }

  getUserImage() {
    const token = localStorage.getItem('authToken') || '';
    this.modalService.getUserImage(token).subscribe(
      (response) => {
        if (response.imagen) {
          this.base64Image = response.imagen;
        }
      }
    )
  }

  getBase64Image(base64String: string | null): string {
    return base64String ? 'data:image/jpeg;base64,' + base64String : '';
  }

  convertImageToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: string | ArrayBuffer | null = reader.result;
      if (base64String) {
        const base64Data = (base64String as string).split(',')[1];
        this.newImageBase64 = base64Data;
        //console.log('Imagen en Base64: ' + this.newImageBase64);
      }
    };
    reader.readAsDataURL(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;

    if (files && files.length > 0) {
      const base64Image = files[0];
      this.convertImageToBase64(base64Image);
    }
  }

}
