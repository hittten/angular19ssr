import {Component, inject, RESPONSE_INIT} from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  imports: [],
  template: `
    <h1>404 Not Found</h1>
  `,
  styles: ``
})
export class NotFoundPageComponent {
  private response = inject(RESPONSE_INIT)
  constructor() {
    if (this.response !== null) {
      this.response.status = 404
    }
  }
}
