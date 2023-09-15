import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatchsService } from 'src/app/services/matchs.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  constructor(
    public matchsService: MatchsService,
    public teamsService: TeamsService
  ) { }

  finalScore: number;


  matchReadyNumber: number = 0;
  matchThirdPlace: boolean = false;

  index: number = 0;
  match: number = 0;
  placeRating: number = 0;

  ngOnInit(): void {
    for (let i = 0; i < this.matchsService.matchs.length; i++) {
      if (this.matchsService.matchs[i].matchReady === true) {
        this.matchReadyNumber++;
      }
    }
    if (this.matchReadyNumber !== this.matchsService.matchs.length) {
      this.index = 1;
      this.match = 2;
      this.placeRating = 1;
      this.matchThirdPlace = true;
    }
  }

  helpArray: any = [];
  chessIdNumber: number;

  ready: boolean = true;

  ind: number;

  notEmpty: boolean = true;

  nameFirst: number = null;
  nameSecond: number = null;

  number: number;

  getRandomDouble(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  readyMatch() {
    if (this.nameFirst !== null && this.nameSecond !== null) {
      this.ready = false;
    }
  }

  onBlurInputFirst(e: any) {
    if (!e.target.value) {
      this.matchsService.matchs[
        e.target.attributes[5].nodeValue - 1
      ].firstTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.matchs[
        e.target.attributes[5].nodeValue - 1
      ].firstTeamScore = 15;
    }
    this.onNumberChangeFirst(
      this.matchsService.matchs[e.target.attributes[5].nodeValue - 1]
        .firstTeamScore
    );
  }
  onBlurInputSecond(e: any) {
    if (!e.target.value) {
      this.matchsService.matchs[
        e.target.attributes[5].nodeValue - 1
      ].secondTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.matchs[
        e.target.attributes[5].nodeValue - 1
      ].secondTeamScore = 15;
    }
    this.onNumberChangeSecond(
      this.matchsService.matchs[e.target.attributes[5].nodeValue - 1]
        .secondTeamScore
    );
  }

  onBlurInputThirdFirst(e: any) {
    if (!e.target.value) {
      this.matchsService.thirdMatch.firstTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.thirdMatch.firstTeamScore = 15;
    }

    this.onNumberChangeFirst(this.matchsService.thirdMatch.firstTeamScore);
  }
  onBlurInputThirdSecond(e: any) {
    if (!e.target.value) {
      this.matchsService.thirdMatch.secondTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.thirdMatch.secondTeamScore = 15;
    }
    this.onNumberChangeSecond(this.matchsService.thirdMatch.secondTeamScore);
  }
  onBlurInputFirstPlaceFirst(e: any) {
    if (!e.target.value) {
      this.matchsService.firstMatch.firstTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.firstMatch.firstTeamScore = 15;
    }
    this.onNumberChangeFirst(this.matchsService.firstMatch.firstTeamScore);
  }
  onBlurInputSecondPlaceFirst(e: any) {
    if (!e.target.value) {
      this.matchsService.firstMatch.secondTeamScore = 0;
    }
    if (e.target.value >= 15) {
      this.matchsService.firstMatch.secondTeamScore = 15;
    }
    this.onNumberChangeSecond(this.matchsService.firstMatch.secondTeamScore);
  }

  onNumberChangeFirst(e: any) {
    this.nameFirst = e;
    this.readyMatch();
  }

  onNumberChangeSecond(e: any) {
    this.nameSecond = e;
    this.readyMatch();
  }

  onThirdMatch() {
    this.number = 0;
    this.nameFirst = null;
    this.nameSecond = null;
    this.ready = true;
    this.matchThirdPlace = false;

    this.notEmpty = false;

    this.matchsService.firstMatch = {
      id: this.matchsService.matchs.length + 1,
      firstTeam: '',
      firstTeamScore: null,
      secondTeam: '',
      matchReady: false,
      secondTeamScore: null,
      firstPlaceMatch: true,
    };

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        this.matchsService.firstMatch.firstTeam =
          this.teamsService.teams[i].name;
      }
      if (i === 1) {
        this.matchsService.firstMatch.secondTeam =
          this.teamsService.teams[i].name;
      }
    }
  }

  onFirstMatch() {
    this.index = 0;
    this.number = 0;
    this.nameFirst = null;
    this.nameSecond = null;
    this.ready = true;
    this.notEmpty = false;

    if (this.teamsService.teams.length <= 3) {
      if (
        this.matchsService.firstMatch.firstTeamScore >
        this.matchsService.firstMatch.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.firstTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.secondTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.teamsService.teams[2].name,
        });
      }
      if (
        this.matchsService.firstMatch.firstTeamScore <
        this.matchsService.firstMatch.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.secondTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.firstTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.teamsService.teams[2].name,
        });
      }

      if (
        this.matchsService.firstMatch.firstTeamScore ===
        this.matchsService.firstMatch.secondTeamScore
      ) {
        this.ind = this.getRandomDouble(1, 2);
        if (this.ind === 1) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.secondTeam,
          });
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.firstTeam,
          });
        }
        if (this.ind === 2) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.firstTeam,
          });
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.secondTeam,
          });
        }

        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.teamsService.teams[2].name,
        });
      }
    }
    if (this.teamsService.teams.length > 3) {
      //Победила первая команда за первое место
      if (
        this.matchsService.firstMatch.firstTeamScore >
        this.matchsService.firstMatch?.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.firstTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.secondTeam,
        });
      }
      //Победила вторая команда за первое место
      if (
        this.matchsService.firstMatch.firstTeamScore <
        this.matchsService.firstMatch.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.secondTeam,
        });
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.firstMatch.firstTeam,
        });
      }
      //Ничья за первое место
      if (
        this.matchsService.firstMatch.firstTeamScore ===
        this.matchsService.firstMatch.secondTeamScore
      ) {
        this.ind = this.getRandomDouble(1, 2);
        if (this.ind === 1) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.secondTeam,
          });
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.firstTeam,
          });
        }
        if (this.ind === 2) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.firstTeam,
          });
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.firstMatch.secondTeam,
          });
        }
      }

      //Победила первая команда за третье место

      if (
        this.matchsService.thirdMatch.firstTeamScore >
        this.matchsService.thirdMatch?.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.thirdMatch.firstTeam,
        });
      }

      //Победила вторая команда за третье место

      if (
        this.matchsService.thirdMatch.firstTeamScore <
        this.matchsService.thirdMatch?.secondTeamScore
      ) {
        this.matchsService.results.push({
          id: this.matchsService.results.length + 1,
          name: this.matchsService.thirdMatch.secondTeam,
        });
      }

      //Ничья за третье место

      if (
        this.matchsService.thirdMatch.firstTeamScore ===
        this.matchsService.thirdMatch.secondTeamScore
      ) {
        this.ind = this.getRandomDouble(1, 2);

        if (this.ind === 1) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.thirdMatch.firstTeam,
          });
        }
        if (this.ind === 2) {
          this.matchsService.results.push({
            id: this.matchsService.results.length + 1,
            name: this.matchsService.thirdMatch.secondTeam,
          });
        }
      }
    }
  }

  onChangeMatch() {
    if (this.index === this.matchsService.matchs.length) {
      this.nameFirst = null;
      this.nameSecond = null;
    }
    this.number = 0;

    //добовление результата в статистику команды
    for (let i = 0; i < this.teamsService.teams.length; i++) {
      if (
        this.teamsService.teams[i].id - 1 ===
        this.teamsService.teams[i].result.length
      ) {
        this.teamsService.teams[i].result.push({
          id: this.teamsService.teams[i].result.length + 1,
          chess: true,
        });
      }

      if (
        this.matchsService.matchs[this.index - 1].firstTeam ===
        this.teamsService.teams[i].name
      ) {
        this.matchsService.matchs[this.index - 1].matchReady = true;
        this.teamsService.teams[i].result.push({
          id: this.teamsService.teams[i].result.length + 1,
          firstTeam: this.matchsService.matchs[this.index - 1].firstTeam,
          firstTeamScore:
            this.matchsService.matchs[this.index - 1].firstTeamScore,
          secondTeam: this.matchsService.matchs[this.index - 1].secondTeam,
          secondTeamScore:
            this.matchsService.matchs[this.index - 1].secondTeamScore,
          matchReady: this.matchsService.matchs[this.index - 1].matchReady,
        });
      }
      if (
        this.matchsService.matchs[this.index - 1].secondTeam ===
        this.teamsService.teams[i].name
      ) {
        this.teamsService.teams[i].result.push({
          id: this.teamsService.teams[i].result.length + 1,
          firstTeam: this.matchsService.matchs[this.index - 1].secondTeam,
          firstTeamScore:
            this.matchsService.matchs[this.index - 1].secondTeamScore,
          secondTeam: this.matchsService.matchs[this.index - 1].firstTeam,
          secondTeamScore:
            this.matchsService.matchs[this.index - 1].firstTeamScore,
          matchReady: this.matchsService.matchs[this.index - 1].matchReady,
        });
      }
      if (
        this.teamsService.teams[i].id - 1 ==
        this.teamsService.teams[i].result.length
      ) {
        this.teamsService.teams[i].result.push({
          id: this.teamsService.teams[i].result.length + 1,
          chess: true,
        });
      }
    }

    this.index++;
    this.nameFirst = null;
    this.nameSecond = null;
    this.ready = true;
    for (let i = 0; i < this.matchsService.matchs.length; i++) {
      if (this.matchsService.matchs[i].matchReady) {
        this.number++;
      }
    }

    //сортировка и подсчет голов
    if (this.matchsService.matchs.length === this.number) {
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        for (let j = 0; j < this.teamsService.teams[i].result.length; j++) {
          if (!this.teamsService.teams[i].result[j].chess) {
            this.teamsService.teams[i].scored =
              this.teamsService.teams[i].scored +
              this.teamsService.teams[i].result[j].firstTeamScore;
            this.teamsService.teams[i].missed =
              this.teamsService.teams[i].missed +
              this.teamsService.teams[i].result[j].secondTeamScore;
          }
        }
      }

      //подсчет очков
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        for (let j = 0; j < this.teamsService.teams[i].result.length; j++) {
          if (!this.teamsService.teams[i].result[j].chess) {
            // debugger
            if (
              this.teamsService.teams[i].result[j].firstTeamScore >
              this.teamsService.teams[i].result[j].secondTeamScore
            ) {
              this.teamsService.teams[i].glasses =
                this.teamsService.teams[i].glasses + 3;
            }
            if (
              this.teamsService.teams[i].result[j].firstTeamScore <
              this.teamsService.teams[i].result[j].secondTeamScore
            ) {
              this.teamsService.teams[i].glasses =
                this.teamsService.teams[i].glasses + 0;
            }
            if (
              this.teamsService.teams[i].result[j].firstTeamScore ===
              this.teamsService.teams[i].result[j].secondTeamScore
            ) {
              this.teamsService.teams[i].glasses =
                this.teamsService.teams[i].glasses + 1;
            }
          }
        }
      }

      for (let i = 0; i < this.teamsService.teams.length; i++) {
        this.teamsService.teams[i].goal =
          this.teamsService.teams[i].scored - this.teamsService.teams[i].missed;
      }




      for (let i = 0; i < this.teamsService.teams.length; i++) {
        this.teamsService.teams[i].place = this.placeRating++;
      }

      //сортировка шахматки

      //очистка результатов от шахматки
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        for (let j = 0; j < this.teamsService.teams[i].result.length; j++) {
          if (this.teamsService.teams[i].result[j].chess) {
            this.teamsService.teams[i].result.splice(j, 1)
          }
        }
      }



      //сортировка по результатам и голам
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        for (let j = 0; j < this.teamsService.teams[i].result.length; j++) {
          this.teamsService.teams[i].result[j].finalScore =
            this.teamsService.teams[i].result[j].firstTeamScore -
            this.teamsService.teams[i].result[j].secondTeamScore;
        }
        this.teamsService.teams[i].result.sort(
          (a: any, b: any) => a.finalScore - b.finalScore
        );
      }


      // сортироовка по голам
      this.teamsService.teams
        .sort((a: any, b: any) => a.glasses - b.glasses || a.goal - b.goal)
        .reverse();



      //добавление шахматки
      for (let i = 0; i < this.teamsService.teams.length; i++) {
        this.helpArray = []
        this.chessIdNumber = 0
        for (let j = 0; j < this.teamsService.teams.length; j++) {
          if (this.teamsService.teams[i] === this.teamsService.teams[j]) {
            this.helpArray.push({
              id: Number(Date.now),
              chess: true,
            })
          }
          if (this.teamsService.teams[i] !== this.teamsService.teams[j]) {
            this.helpArray.push(this.teamsService.teams[i].result[this.chessIdNumber])
            this.chessIdNumber++
          }
        }
        this.teamsService.teams[i].result = []
        this.teamsService.teams[i].result = this.helpArray
      }




      if (this.teamsService.teams.length <= 3) {
        this.matchsService.firstMatch = {
          id: 1,
          firstTeam: '',
          firstTeamScore: null,
          secondTeam: '',
          matchReady: false,
          secondTeamScore: null,
          firstPlaceMatch: true,
        };
        for (let i = 0; i < 2; i++) {
          if (i === 0) {
            this.matchsService.firstMatch.firstTeam =
              this.teamsService.teams[i].name;
          }
          if (i === 1) {
            this.matchsService.firstMatch.secondTeam =
              this.teamsService.teams[i].name;
          }
        }
      }
      if (this.teamsService.teams.length > 3) {
        this.matchsService.thirdMatch = {
          id: 2,
          firstTeam: '',
          firstTeamScore: null,
          secondTeam: '',
          matchReady: false,
          secondTeamScore: null,
          thirdPlaceMatch: true,
        };

        for (let i = 2; i < 4; i++) {
          if (i === 2) {
            this.matchsService.thirdMatch.firstTeam =
              this.teamsService.teams[i].name;
          }
          if (i === 3) {
            this.matchsService.thirdMatch.secondTeam =
              this.teamsService.teams[i].name;
          }
        }
      }
    }
  }
}
