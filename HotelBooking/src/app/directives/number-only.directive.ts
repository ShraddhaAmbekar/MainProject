import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private element :ElementRef) {}
  @HostListener('input',['$event']) onInputChange(){
    console.log('dir');
    const initialValue=this.element.nativeElement.value;
    let inputBoxdata = this.element.nativeElement.value;
    inputBoxdata.replace(/[^0-9]*/g, '')
    this.element.nativeElement.value = inputBoxdata.replace(/[^0-9]*/g, '')
  }
}
