import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ChangeDetectorRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage implements OnInit {

  cvData: any = {
    image: '',
    about_me: '',
    work_xp: '',
    skills: '',
    education: '',
    address: '',
    phone: '',
    email: '',
  };

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  base64Image: string | null = null;
  selectedImageURL: string | ArrayBuffer | null = null;

  constructor(
    private cvService: CvService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    //this.mostrarCV();
  }

  cargarCV() {
    const token = localStorage.getItem('authToken') || '';

    this.cvService.postCVData(this.cvData, token).subscribe(
      (response) => {
        console.log('CV cargado con éxito', response);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  actualizarCV() {
    const token = localStorage.getItem('authToken') || '';

    this.cvService.updateCVData(this.cvData, token).subscribe(
      (response) => {
        console.log('CV actualizado con éxito', response);
      },
      (err) => {
        console.error(err);
      }
    )
  }

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    console.log('File Selected', event.target.files[0]);
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      const selectedFile: File = files[0];
      this.selectedImageURL = URL.createObjectURL(selectedFile);
      this.convertToBase64(selectedFile);
    }
  }  

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64Image = (reader.result as string).split(',')[1];
      this.cvData.image = this.base64Image;
      console.log('Imagen en base64', this.base64Image);
    };
    reader.readAsDataURL(file);
  }
}
