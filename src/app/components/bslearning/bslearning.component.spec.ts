import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BslearningComponent } from './bslearning.component';

describe('BslearningComponent', () => {
  let component: BslearningComponent;
  let fixture: ComponentFixture<BslearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BslearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BslearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
