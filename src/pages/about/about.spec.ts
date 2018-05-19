import { AboutPage } from './about'
import { TestBed } from '@angular/core/testing'
import { IonicPageModule, Platform, NavController, NavParams, Config,
App, DomController, Keyboard } from 'ionic-angular';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock,
NavParamsMock, ConfigMock} from 'ionic-mocks'

describe('AppComponent', () => {
  let fixture, component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutPage
      ],
      imports: [
        IonicPageModule.forChild(AboutPage)
      ],
      providers: [
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useFactory: () => NavParamsMock.instance() },
        { provide: Config, useFactory: () => ConfigMock.instance() },
        App, DomController, Keyboard
      ]
    })

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
  })

  it('should create the about page', () => {
    expect(component).toBeTruthy();
    expect(component instanceof AboutPage).toEqual(true);
  });
})