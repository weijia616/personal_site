import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-user-detail',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url">
          <h2>{{ user.login }}</h2>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {
  user;

  constructor(
      private route: ActivatedRoute,
      private userService: UserService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUser(username).subscribe(user => {
        this.user = user;
      })
    })
  }

}
