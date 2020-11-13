import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements OnInit {
  @Output() clickOutside = new EventEmitter();

  captured = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target): void {
    if (!this.captured) {
      return;
    }

    if (!this.elRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }

  ngOnInit(): void {
    fromEvent(document, 'click', { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.captured = true));
  }
}
