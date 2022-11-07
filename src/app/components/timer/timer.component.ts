import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { map } from 'rxjs';
import { SummonService } from 'src/app/data/services/summon.service';
import { Role } from 'src/app/models/role';
import { Summon } from 'src/app/models/summon';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  top: Role = new Role;
  jg: Role = new Role;
  mid: Role = new Role;
  adc: Role = new Role;
  sup: Role = new Role;

  test: string | undefined;

  constructor(
    private summonService: SummonService,
  ) {
    this.top.id = 'top';
    this.top.name = 'TOP';
    this.top.summon_1.id = 'ghost';
    this.top.summon_2.id = 'heal';

    this.summonService.getSummonById(this.top.summon_1.id)
      .subscribe((summon: Summon) => {
        this.top.summon_1.name = summon.name;
        this.top.summon_1.img = summon.img;
        this.top.summon_1.cooldown = summon.cooldown;
      });
      this.summonService.getSummonById(this.top.summon_2.id)
      .subscribe((summon: Summon) => {
        this.top.summon_2.name = summon.name;
        this.top.summon_2.img = summon.img;
        this.top.summon_2.cooldown = summon.cooldown;
      });
  }

  ngOnInit(): void { }

  tick(): void { }

}
