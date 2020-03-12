import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="welcome_section" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1>
            <span class="main-title dosis-font typewrite" data-period="2000" data-content='["Hello World.", "I am Vega.", "I am a Programmer.", "I am a Developer.", "And I am Creative."]'>
              <span class="wrap"></span>
            </span>
          </h1>
        </div>
      </div>
    </section>
    <app-resume></app-resume>
  `,
  styles: [`
    
  `],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
