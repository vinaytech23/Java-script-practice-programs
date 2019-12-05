import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeOneComponent } from './file-size-one.component';

describe('FileSizeOneComponent', () => {
  let component: FileSizeOneComponent;
  let fixture: ComponentFixture<FileSizeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSizeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
