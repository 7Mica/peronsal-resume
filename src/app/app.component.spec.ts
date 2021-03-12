import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`Should create paragraph`, () => {
  //   const paragraphFixture = TestBed.createComponent(ParagraphComponent);
  //   paragraphFixture.detectChanges();

  //   const compiled = paragraphFixture.nativeElement;

  //   expect(compiled.querySelector('p').textContent).toContain('epalee');
  // });

  // it('should render paragraph', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('paragraph').textContent).toContain('epalee');
  // });
});
