import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuizButtonComponent } from './new-quiz-button.component';

describe('NewQuizButtonComponent', () => {
  let component: NewQuizButtonComponent;
  let fixture: ComponentFixture<NewQuizButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuizButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuizButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
