import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'toggle-button',
  template: `
    <div class="toggle-component">
      <label class="toggle" for="toggle-input">
        <span class="toggle-bar">
          <input
            [(ngModel)]="value"
            type="checkbox"
            role="switch"
            tabindex="0"
            id="toggle-input"
            [disabled]="disabled"
            (change)="toggled($event)"
          />
          <span class="toggle-thumb-container">
            <span class="toggle-thumb"></span>
          </span>
          <span class="toggle-fill"></span>
        </span>
        <span class="toggle-content"><ng-content></ng-content></span>
      </label>
    </div>
  `,
  styleUrls: ['toggle-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true,
    },
  ],
})
export class ToggleButtonComponent {
  public disabled = false;
  public value = false;

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(val: boolean) {
    this.value = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggled(switchState: any) {
    if (!this.disabled) {
      this.value = switchState.currentTarget?.checked;
      this.onChanged(switchState.currentTarget?.checked);
      this.onTouched();
    }
  }
}
