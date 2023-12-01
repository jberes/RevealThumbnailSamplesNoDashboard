import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSimpleComboModule, IgxInputGroupModule } from 'igniteui-angular';
import { TemplatedComboComponent } from './templated-combo.component';

describe('TemplatedComboComponent', () => {
  let component: TemplatedComboComponent;
  let fixture: ComponentFixture<TemplatedComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedComboComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSimpleComboModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
