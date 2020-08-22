import { Injectable } from '@angular/core';
import {Hero} from "../model/hero";
import {HEROES} from "../model/mock-heros";
import { Observable, of } from 'rxjs';
import {MessageService} from "../message-service/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("Generating heroes")
    return of(HEROES);
  }


}
