import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProjectPageComponent } from './github-project-page.component';

describe('GithubProjectPageComponent', () => {
  let component: GithubProjectPageComponent;
  let fixture: ComponentFixture<GithubProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubProjectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
