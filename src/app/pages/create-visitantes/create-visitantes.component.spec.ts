import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitantesComponent } from './create-visitantes.component';

describe('CreateVisitantesComponent', () => {
  let component: CreateVisitantesComponent;
  let fixture: ComponentFixture<CreateVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVisitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
