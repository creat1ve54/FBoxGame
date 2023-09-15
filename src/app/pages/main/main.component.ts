import { Component, OnInit } from '@angular/core';
// import { matchs } from 'src/app/data/match';
import IMatch from 'src/app/modules/match';
import { MatchsService } from 'src/app/services/matchs.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    public matchsService: MatchsService,
    public teamsService: TeamsService
  ) {}

  ngOnInit(): void {
  }
}
