import { Component, OnInit } from '@angular/core';
import { MatchsService } from 'src/app/services/matchs.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  constructor(
    public teamsService: TeamsService,
    public matchsService: MatchsService
  ) { }

  ngOnInit(): void {
    if(this.matchsService.matchs.length === 0) {
      location.href = "http://localhost:4200/"
    }
  }
}
