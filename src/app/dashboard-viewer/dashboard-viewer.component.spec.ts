import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewerComponent } from './dashboard-viewer.component';

describe('DashboardViewerComponent', () => {
  let component: DashboardViewerComponent;
  let fixture: ComponentFixture<DashboardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
