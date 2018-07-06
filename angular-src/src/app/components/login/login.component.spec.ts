import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LoginComponent, MyErrorStateMatcher} from './login.component';
import {FormControl, FormGroupDirective} from "@angular/forms";

/*describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe("ErrorStateMatcher", () => {
  it('ErrorState_1', () => {
    let matcher = new MyErrorStateMatcher();
    let result = matcher.isErrorState(null,null);
    expect(result).toBe(false);
  });

  it('ErrorState_2', () => {
    let matcher = new MyErrorStateMatcher();
    let fgd = new FormGroupDirective(null, null);
    fgd.submitted;
    let fc = new FormControl();
    fc.valid;
    fc.markAsDirty();
    fc.markAsTouched();
    let result = matcher.isErrorState(fc, fgd);
    expect(result).toBe(false);
  });
});
