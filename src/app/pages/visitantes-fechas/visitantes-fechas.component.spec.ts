import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitantesFechasComponent } from './visitantes-fechas.component';

describe('VisitantesFechasComponent', () => {
  let component: VisitantesFechasComponent;
  let fixture: ComponentFixture<VisitantesFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitantesFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitantesFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
