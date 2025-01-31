import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsersComponentComponent } from './show-users-component.component';

describe('ShowUsersComponentComponent', () => {
  let component: ShowUsersComponentComponent;
  let fixture: ComponentFixture<ShowUsersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowUsersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUsersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
