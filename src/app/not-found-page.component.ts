import {Component, RESPONSE_INIT, REQUEST, inject} from '@angular/core';

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
  private request = inject(REQUEST)

  constructor() {
    if (this.response !== null) {
      this.response.status = 404
    }

    if (this.request !== null) {
      console.log(this.request.url)
    }

    console.log("request", this.request)
    console.log("response", this.response)
  }
}
