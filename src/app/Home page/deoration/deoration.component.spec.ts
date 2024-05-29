import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeorationComponent } from './deoration.component';

describe('DeorationComponent', () => {
  let component: DeorationComponent;
  let fixture: ComponentFixture<DeorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
