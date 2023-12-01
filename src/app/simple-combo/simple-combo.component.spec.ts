import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxSimpleComboModule, IgxInputGroupModule } from 'igniteui-angular';
import { SimpleComboComponent } from './simple-combo.component';

describe('SimpleComboComponent', () => {
  let component: SimpleComboComponent;
  let fixture: ComponentFixture<SimpleComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComboComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxSimpleComboModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
