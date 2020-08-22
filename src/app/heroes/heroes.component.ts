import {Component, OnInit} from '@angular/core';
import {Hero} from "../model/hero";
import {HeroService} from "../hero-service/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./style/hero-style.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(selectedHero: Hero) {
    this.selectedHero = selectedHero;
  }

}
