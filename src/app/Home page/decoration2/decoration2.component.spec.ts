import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decoration2Component } from './decoration2.component';

describe('Decoration2Component', () => {
  let component: Decoration2Component;
  let fixture: ComponentFixture<Decoration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Decoration2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Decoration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
