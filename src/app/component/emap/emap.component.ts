import {Component, OnInit} from '@angular/core';
import {EmpAuthValue} from "../../model/EmpAuthValue";

import {EmapAuthService} from "../../service/emap-auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-emap',
  templateUrl: './emap.component.html',
  styleUrls: ['./emap.component.scss']
})
export class EmapComponent implements OnInit {
  public authValue: EmpAuthValue = new EmpAuthValue();
  private tokenValue: String = '';

  constructor(private emapAuthService: EmapAuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.emapAuthService.authenticate(this.authValue)
      .subscribe(
        (val) => {
          this.tokenValue = val.token
          console.log("Token found " + this.tokenValue)
        });
    if (this.tokenValue.startsWith("Bearer")) {
      console.log("Redirecting to")
      this.router.navigate(['./main']);
    } else {
      console.log("not redirecting")
      this.router.navigate(['./main']);
    }
  }
}
