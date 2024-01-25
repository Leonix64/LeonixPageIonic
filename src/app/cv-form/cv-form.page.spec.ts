import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvFormPage } from './cv-form.page';

describe('CvFormPage', () => {
  let component: CvFormPage;
  let fixture: ComponentFixture<CvFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CvFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
