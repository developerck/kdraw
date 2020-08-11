import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
/**
 * Generated class for the CanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
   selector: 'canvas-draw',
   templateUrl: 'canvas-draw.html'
 })
 export class CanvasDraw {

     @ViewChild('myCanvas') canvas: any;
     screen: any;
      state: boolean = false;
     canvasElement: any;
     lastX: number;
     lastY: number;

     currentColour: string = '#1abc9c';
     availableColours: any;

     brushSize: number = 10;

     constructor(public platform: Platform, public renderer: Renderer, private screenshot: Screenshot) {
         console.log('Hello CanvasDraw Component');

         this.availableColours = [
             '#1abc9c',
             '#3498db',
             '#9b59b6',
             '#e67e22',
             '#e74c3c'
         ];

     }

     ngAfterViewInit(){

         this.canvasElement = this.canvas.nativeElement;

         this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
         this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

     }

     changeColour(colour){
         this.currentColour = colour;
     }

     changeSize(size){
         this.brushSize = size;
     }

     handleStart(ev){

         this.lastX = ev.touches[0].pageX;
         this.lastY = ev.touches[0].pageY;
     }

     handleMove(ev){

         let ctx = this.canvasElement.getContext('2d');
         let currentX = ev.touches[0].pageX;
         let currentY = ev.touches[0].pageY;

         ctx.beginPath();
         ctx.lineJoin = "round";
         ctx.moveTo(this.lastX, this.lastY);
         ctx.lineTo(currentX, currentY);
         ctx.closePath();
         ctx.strokeStyle = this.currentColour;
         ctx.lineWidth = this.brushSize;
         ctx.stroke();

         this.lastX = currentX;
         this.lastY = currentY;

     }

     clearCanvas(){
         let ctx = this.canvasElement.getContext('2d');
         ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
     }
// screeshot
     reset() {
     var self = this;
     setTimeout(function(){
       self.state = false;
     }, 1000);
   }

   screenShot() {
     this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
       this.screen = res.filePath;
       this.state = true;
       this.reset();
     });
   }

 }
