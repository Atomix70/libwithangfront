import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleauthComponent } from './singleauth.component';

describe('SingleauthComponent', () => {
  let component: SingleauthComponent;
  let fixture: ComponentFixture<SingleauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
