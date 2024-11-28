import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensumTableComponent } from './pensum-table.component';

describe('PensumTableComponent', () => {
  let component: PensumTableComponent;
  let fixture: ComponentFixture<PensumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PensumTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
