import { Component, OnInit } from '@angular/core';
// import { teams } from 'src/app/data/team';
import ITeam from 'src/app/modules/team';
import { MatchsService } from 'src/app/services/matchs.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public teamsService: TeamsService,
    public matchsService: MatchsService
  ) { }
  ngOnInit(): void { }

  open: boolean = false;

  newGame() {
    this.teamsService.teams = [];
    this.teamsService.teams.length = 3;
    this.matchsService.matchs.length = 0;
    for (let i = 0; i < this.teamsService.teams.length; i++) {
      this.teamsService.teams[i] = {
        id: i + 1,
        name: '',
        result: [],
        scored: 0,
        missed: 0,
        glasses: 0,
        goal: null,
        place: 0,
      }
    }
    this.matchsService.inputDisabled = false
    this.matchsService.addBtn = false
    this.matchsService.deleteBtn = false
    this.matchsService.matchs = []
    this.open = false;
  }

  openMenu() {
    this.open = !this.open;
  }
  closePopup() {
    this.open = false;
  }
}
