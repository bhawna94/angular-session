import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
describe(
  'AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let obj: AppService;
  const mockRouter{
    navigate: jasmine.createSpy('navigate');
    };

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AppService, {provide: Router, useValue: mockRouter}]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    obj = TestBed.get(AppService);
    router = TestBed.get(Router);
  });
  it('be defined', () => {
    expect(comp).toBeDefined();
  });
  it('get data from service', () => {
    spyOn(obj, 'getData').and.returnValue(Observable.of({message: 'success'}));
   // spyOn(console, 'log');
    comp.getDataFromService();
   // expect(console.log).toHaveBeenCalled();
    expect(comp.data).toEqual({message: 'success' });
    });

  it('handling error', () => {
    spyOn(obj, 'getData').and.returnValue(Observable.throw({message: 'failure'}));
    comp.getDataFromService();
    expect(comp.error).toEqual({message: 'failure'});
  });
/*
    it('get data from service', () => {
      spyOn(obj, 'getData').and.returnValue(Observable.of({message: 'success'}));
      // spyOn(console, 'log');
      comp.getDataFromService();
      expect(router.navigate).toHaveBeenCalled();
      expect(comp.data).toEqual({message: 'success' });
    });

  });*/
  /*it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
*/
