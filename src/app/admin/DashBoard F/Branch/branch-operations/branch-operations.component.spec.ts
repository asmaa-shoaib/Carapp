import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOperationsComponent } from './branch-operations.component';

describe('BranchOperationsComponent', () => {
  let component: BranchOperationsComponent;
  let fixture: ComponentFixture<BranchOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BranchOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranchOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
