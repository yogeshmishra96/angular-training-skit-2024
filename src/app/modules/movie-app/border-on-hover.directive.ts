import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click') onMouseeEnter() {
    this.highlight('yellow');
  }

  // @HostListener('mouseleave') onMouseeLeave() {
  //   this.highlight('');
  // }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
