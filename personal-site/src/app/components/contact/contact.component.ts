import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">

          <h1 class="title">Contact Us!</h1>

        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <!-- form goes here -->
        FORM GOES HERE!

      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
