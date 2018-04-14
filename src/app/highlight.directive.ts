import {AfterViewInit, Directive, ElementRef, Input, OnChanges, HostListener} from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  {

  @Input('appHighlight') color: string;

  constructor(private el: ElementRef) {
    console.log(this.el);
    // this.el.nativeElement.style.background = 'red';
  }
  @HostListener('mouseenter') enter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') leave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
 /* ngOnChanges(){
    this.el.nativeElement.style.backgroundColor = this.color;

  }
  ngAfterViewInit(){
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}*/

 // this is a custom directive
