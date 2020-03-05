import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <section id="about_me_section" class="hero">
      <div class="col-lg-6 wrap-block about-me-secion">
        <h1 class="section-title dosis-font">ABOUT ME</h1>
        <h2 class="section-subtitle dosis-font">I AM A PROGRAMMER &amp; DEVELOPER</h2>
        <h3 class="section-text dosis-font">
          I am an allround web developer.
          I am a senior programmer with good knowledge of front-end techniques.
          I love structure and order and I also stand for quality.
          I love spending time on fixing little details and optimizing web apps.
          Also I like working in a team, you'll learn faster and much more.
          As the saying goes: 'two heads are better than one'.
        </h3>

      </div>
    </section>
  `,
  styles: []
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
