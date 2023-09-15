import { Component, OnInit } from '@angular/core';
import { MatchsService } from 'src/app/services/matchs.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {
  constructor(
    public teamsService: TeamsService,
    public matchsService: MatchsService
  ) { }

  ngOnInit() {
    if (this.matchsService.matchs.length !== 0) {
      this.matchsService.inputDisabled = true
      this.matchsService.addBtn = true
      this.matchsService.deleteBtn = true
    }
  }
  games: number;


  btnDisabled: boolean = true

  teamNumber: number;

  firstTeam: number;
  secondTeam: number;

  firstTeamName: string;
  secondTeamName: string;

  teamsArray: any = [];

  index: number;
  newNumber: Array<Array<number>> = [];
  newNumberArray: Array<number> = [];

  randomNumber: Array<number> = [];



  teamNameAdd() {
    this.teamsService.teams.push({
      id: this.teamsService.teams.length + 1,
      name: '',
      goal: null,
      scored: 0,
      missed: 0,
      glasses: 0,
      result: [],
      place: 0,
    });
  }

  teamNameDelete() {
    this.teamsService.teams.pop();
  }

  getRandom() {
    return this.newNumber.sort(() => Math.random() - 0.5);
  }

  getRandomDouble(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getTeam(first: number, second: number) {
    for (let i = 0; i < this.teamsService.teams.length; i++) {
      if (i === first) {
        this.firstTeamName = this.teamsService.teams[i].name;
      }
      if (i === second) {
        this.secondTeamName = this.teamsService.teams[i].name;
      }
    }
    this.teamsArray.push([this.firstTeamName, this.secondTeamName]);
  }

  onChangeName() {
    this.teamNumber = 1
    if (this.teamsService.teams.length > 0) {
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        for (let j = 0; j < this.teamsService.teams.length; j++) {
          if (this.teamsService.teams[i].id !== this.teamsService.teams[j].id) {
            if (this.teamsService.teams[i].name.toLowerCase() === this.teamsService.teams[j].name.toLowerCase() && this.teamsService.teams[i].name !== '' && this.teamsService.teams[j].name !== '') {
              this.teamNumber++;
            }
          }
        }
      }
      if (this.teamNumber > 2) {
        this.btnDisabled = true
      } else {
        this.btnDisabled = false
      }
    }

  }

  submit() {
    this.btnDisabled = true
    this.matchsService.inputDisabled = true
    this.matchsService.addBtn  = true
    this.matchsService.deleteBtn = true
    this.matchsService.matchs = [];
    this.games =
      (this.teamsService.teams.length * (this.teamsService.teams.length - 1)) /
      2;

    for (let i = 0; i < this.teamsService.teams.length; i++) {
      this.randomNumber.push(this.teamsService.teams[i].id);
    }
    for (let i = 0; i < this.randomNumber.length; i++) {
      this.index = this.getRandomDouble(1, 2);
      for (let j = i + 1; j < this.randomNumber.length; j++) {
        this.newNumberArray = [];
        this.newNumberArray.push(
          this.randomNumber[i] - 1,
          this.randomNumber[j] - 1
        );
        if (this.index === 1) {
          this.newNumber.push(this.newNumberArray);
        }
        if (this.index === 2) {
          this.newNumberArray.reverse();
          this.newNumber.push(this.newNumberArray);
        }
      }
    }
    this.getRandom();

    for (let i = 0; i < this.games; i++) {
      this.getTeam(this.newNumber[i][0], this.newNumber[i][1]);
      this.matchsService.matchs.push({
        id: i + 1,
        firstTeam: this.firstTeamName,
        firstTeamScore: null,
        secondTeam: this.secondTeamName,
        matchReady: false,
        secondTeamScore: null,
      });
    }
  }
}
