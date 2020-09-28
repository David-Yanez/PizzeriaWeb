import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduListComponent } from './produ-list.component';

describe('ProduListComponent', () => {
  let component: ProduListComponent;
  let fixture: ComponentFixture<ProduListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
