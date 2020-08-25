import {Component, OnInit} from '@angular/core';
import {EmpAuthValue} from "../../model/EmpAuthValue";

import {EmapAuthService} from "../../service/emap-auth.service";


@Component({
  selector: 'app-emap',
  templateUrl: './emap.component.html',
  styleUrls: ['./emap.component.scss']
})
export class EmapComponent implements OnInit {
  public authValue: EmpAuthValue = new EmpAuthValue();

  constructor(private emapAuthService: EmapAuthService) {}

  ngOnInit(): void {
  }

  authenticate(): void {
    console.log(this.emapAuthService.authenticate(this.authValue));
  }
}
