import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRecordComponent } from './manager-record.component';

describe('ManagerRecordComponent', () => {
  let component: ManagerRecordComponent;
  let fixture: ComponentFixture<ManagerRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
