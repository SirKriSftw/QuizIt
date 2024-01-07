import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuizButtonComponent } from './load-quiz-button.component';

describe('LoadQuizButtonComponent', () => {
  let component: LoadQuizButtonComponent;
  let fixture: ComponentFixture<LoadQuizButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadQuizButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadQuizButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
