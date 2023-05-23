import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewListComponent } from './add-new-list.component';

describe('AddNewListComponent', () => {
  let component: AddNewListComponent;
  let fixture: ComponentFixture<AddNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
