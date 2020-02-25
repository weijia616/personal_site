import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">

          <h1 class="title">Welcome to my place</h1>

        </div>
      </div>
    </section>
  `,
  styles: [`
    
  `],
  styleUrls: ['./home-app.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
