import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOperationComponent } from './photo-operation.component';

describe('PhotoOperationComponent', () => {
  let component: PhotoOperationComponent;
  let fixture: ComponentFixture<PhotoOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
