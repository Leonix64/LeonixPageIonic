import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    private modalImageService: ModalImageService,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.getUserImage();
  }

  openFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    console.log('Archivo seleccionado:', event.target.files[0]);
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const base64Image = files[0];
      this.convertImageToBase64(base64Image);
    }
  }

  async onUpload() {
    if (this.newImageBase64) {
      const token = localStorage.getItem('authToken') || '';
      try {
        const response = await this.modalImageService.uploadImage(this.newImageBase64, token).toPromise();
        console.log('Imagen subida exitosamente:', response);

        const toast = await this.toastController.create({
          message: 'Imagen subida exitosamente',
          duration: 2000,
          position: 'top'
        });
        toast.present();
      } catch (error) {
        console.error(error);
      }
    }
  }

  onConfirm(): void {
    if (this.newImageBase64) {
      this.onUpload();
      this.modalController.dismiss();
    }
  }

  onCancel(): void {
    this.modalController.dismiss();
  }

  private convertImageToBase64(file: File): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: string | ArrayBuffer | null = reader.result;
      if (base64String) {
        const base64Data = (base64String as string).split(',')[1];
        this.newImageBase64 = base64Data;
        console.log('Imagen en base64:', this.newImageBase64);
      }
    };
    reader.readAsDataURL(file);
  }

  private getUserImage(): void {
    const token = localStorage.getItem('authToken') || '';
    this.modalImageService.getUserImage(token).subscribe(
      (response) => {
        if (response.imagen) {
          this.base64Image = response.imagen;
        }
      },
      (error) => {
        console.error('Error al cargar la imagen del usuario:', error);
      }
    );
  }

  getBase64Image(base64String: string | null): string {
    return base64String ? 'data:image/jpeg;base64,' + base64String : '';
  }
  

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;

    if (files && files.length > 0) {
      const base64Image = files[0];
      this.convertImageToBase64(base64Image);
    }
  }
}
