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
        <form (ngSubmit)="submitForm()">

          <!-- name -->
          <div class="field">
            <input type="text" name="name" class="input" placeholder="Your Name" [(ngModel)]="name">
          </div>

          <!-- email -->
          <div class="field">
            <input type="email" name="email" class="input" placeholder="Your Email" [(ngModel)]="email">
          </div>

          <!-- message -->
          <div class="field">
            <textarea class="textarea" name="message" placeholder="What's on your mind?" [(ngModel)]="message"></textarea>
          </div>

          <button type="submit" class="button is-danger is-large">Submit</button>

        </form>

      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {

  }

}
