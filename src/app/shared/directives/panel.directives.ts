import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[panel]' })
export class PanelDirective {
  @Input() toggle = false;
  constructor(private el: ElementRef) {}
  @HostListener('click')
  toggleShow() {
    this.toggle = !this.toggle;
    if (!this.toggle) {
      this.el.nativeElement.style.visibility = 'hidden';
    } else {
      this.el.nativeElement.style.visibility = 'visible';
    }
  }
}