import {
  TestBed,
  async,
  ComponentFixture,
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppComponentService } from './app-component.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let appComponentService: AppComponentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AppComponentService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    appComponentService = TestBed.get(AppComponentService);
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'angular-test-bed'`, async(() => {
    expect(component.title).toEqual('angular-test-bed');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to angular-test-bed!'
    );
  }));

  it(`addNumbers should return the add of two numbers`, async(() => {
    const result = component.addNumbers(1, 2);
    expect(result).toEqual(3);
  }));

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [AppComponentService],
    (injectService: AppComponentService) => {
      expect(injectService).toBe(appComponentService);
    }
  ));

  it(`multiplyNumbers from appComponentService should return the result of a multiplication of two numbers`, async(() => {
    expect(appComponentService).toBeTruthy();
    const result = component.multiplyNumbers(1, 2);
    expect(result).toEqual(3);
  }));
});
