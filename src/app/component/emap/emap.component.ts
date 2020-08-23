import {Component, OnInit} from '@angular/core';
import {EmpAuthValue} from "../../model/EmpAuthValue";


@Component({
  selector: 'app-emap',
  templateUrl: './emap.component.html',
  styleUrls: ['./emap.component.scss']
})
export class EmapComponent implements OnInit {
  public authValue: EmpAuthValue = new EmpAuthValue();

  constructor() {}

  ngOnInit(): void {
  }

  authenticate(): void {
    console.warn("Authenticating user: " + this.authValue.email)
  }
}
