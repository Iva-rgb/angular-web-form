import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFormComponent } from './web-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('WebFormComponent', () => {
  let component: WebFormComponent;
  let fixture: ComponentFixture<WebFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebFormComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(WebFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text fields and checkboxes', () => {
    const textFields =
      fixture.nativeElement.querySelectorAll('input[type="text"]');
    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    );
    expect(textFields.length).toBe(2);
    expect(checkbox).toBeTruthy();
  });
});
