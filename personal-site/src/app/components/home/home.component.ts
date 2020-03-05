import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section id="welcome_section" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">

          <h1 class="title dosis-font">Welcome to my place</h1>

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
