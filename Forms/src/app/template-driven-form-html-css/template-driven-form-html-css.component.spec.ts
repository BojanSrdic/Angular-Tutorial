import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormHtmlCssComponent } from './template-driven-form-html-css.component';

describe('TemplateDrivenFormHtmlCssComponent', () => {
  let component: TemplateDrivenFormHtmlCssComponent;
  let fixture: ComponentFixture<TemplateDrivenFormHtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormHtmlCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormHtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
