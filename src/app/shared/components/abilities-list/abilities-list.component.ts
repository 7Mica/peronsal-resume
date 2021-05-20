import { Component, Input, OnInit } from '@angular/core';
import { IAbility } from '@core/interfaces/ability.interface';
import { from, Observable, of, zip } from 'rxjs';
import { groupBy, mergeMap, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'abilities-list',
  templateUrl: 'abilities-list.component.html',
  styleUrls: ['abilities-list.component.scss'],
})
export class AbilitiesListComponent implements OnInit {
  @Input()
  data: IAbility[] = [];

  public sectionTitle = 'Abilities';
  public abilitiesObserver$: Observable<any[]> = new Observable<any[]>();

  ngOnInit(): void {
    this.abilitiesObserver$ = from(this.data).pipe(
      groupBy((ability: IAbility) => ability.abilityName),
      mergeMap((group) => zip(of(group.key), group.pipe(toArray()))),
      toArray()
    );
  }
}
