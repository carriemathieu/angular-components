import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter

  // module positioned within div w/ CSS position relative. appending to body allows us to position relative to BODY instead of DIV
  constructor(private el: ElementRef) {}

  // ngonInit = lifecycle hook
  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  // gets called when navigate away from component
  ngOnDestroy() {
    // removes modal that was appended to body
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
