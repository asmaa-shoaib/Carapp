import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOperationsComponent } from './details-operations.component';

describe('DetailsOperationsComponent', () => {
  let component: DetailsOperationsComponent;
  let fixture: ComponentFixture<DetailsOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
