import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  // viewcontainer - reference to whatever container directive applied to
  // templateref - reference to whatever elements directive applied to
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  // "whenever 'appTimes' directive set on element"
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear()

    // from 0 to times, create new instance of templateref
    for(let i = 0; i < times; i++) {
      // createEmbeddedView = create element reference templateRef
      // object passed in as arg to createEmbeddedView allows us to reference that item in template
      this.viewContainer.createEmbeddedView(this.templateRef, {})
    }
  }
}
