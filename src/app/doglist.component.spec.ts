import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoglistComponent } from './doglist.component';

describe('DoglistComponent', () => {
  let component: DoglistComponent;
  let fixture: ComponentFixture<DoglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoglistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
