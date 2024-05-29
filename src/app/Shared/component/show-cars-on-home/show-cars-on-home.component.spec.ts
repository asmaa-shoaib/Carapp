import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarsOnHomeComponent } from './show-cars-on-home.component';

describe('ShowCarsOnHomeComponent', () => {
  let component: ShowCarsOnHomeComponent;
  let fixture: ComponentFixture<ShowCarsOnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCarsOnHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCarsOnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
