import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRoleIcon]'
})
export class RoleIconDirective {

  @Input()
  public set appRoleIcon(role: string) {
    switch(role) {
      case 'Developer':
        this.icon = 'bi-person-badge';
        break;
      case 'Architect':
        this.icon = 'bi-code-square';
        break;
      case 'Manager':
        this.icon = 'bi-stars'
        break;
      default:
        this.icon = 'bi-person'
    }
  }

  @HostBinding('class')
  public icon: string = 'bi-person'

  constructor() { }

}
