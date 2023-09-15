import { Component, OnInit } from '@angular/core';
import ITeam from './modules/team';
import { TeamsService } from './services/teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public teamsService: TeamsService) {}
  ngOnInit(): void {
  }
  title = 'f-box';

}
