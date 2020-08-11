import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';
import { Screenshot } from '@ionic-native/screenshot';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CanvasDraw
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     AndroidFullScreen,
     Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
