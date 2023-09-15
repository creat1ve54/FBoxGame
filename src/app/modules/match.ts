export default interface IMatch {
  id: number,
  firstTeam:string,
  secondTeam: string,
  firstTeamScore: number | null,
  secondTeamScore: number | null,
  matchReady: boolean,
  thirdPlaceMatch?: boolean,
  firstPlaceMatch?: boolean,
}
