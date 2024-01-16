import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepresentacionPage } from './representacion.page';

describe('RepresentacionPage', () => {
  let component: RepresentacionPage;
  let fixture: ComponentFixture<RepresentacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RepresentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
