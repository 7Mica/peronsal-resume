import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'HTMLSanitizer',
})
export class HTMLSanitizerPipe implements PipeTransform {
  constructor(private htmlSanitizer: DomSanitizer) {}

  transform(value: any): SafeHtml {
    return this.htmlSanitizer.bypassSecurityTrustHtml(value);
  }
}

@NgModule({
  declarations: [HTMLSanitizerPipe],
  exports: [HTMLSanitizerPipe],
})
export class HTMLSanitizerModule {}
