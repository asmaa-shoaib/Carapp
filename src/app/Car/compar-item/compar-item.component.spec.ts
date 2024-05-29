import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparItemComponent } from './compar-item.component';

describe('ComparItemComponent', () => {
  let component: ComparItemComponent;
  let fixture: ComponentFixture<ComparItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
