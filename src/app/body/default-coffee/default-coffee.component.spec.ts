import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCoffeeComponent } from './default-coffee.component';

describe('DefaultCoffeeComponent', () => {
  let component: DefaultCoffeeComponent;
  let fixture: ComponentFixture<DefaultCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
