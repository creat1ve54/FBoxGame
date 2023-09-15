export default interface ITeam {
  id: number,
  name: string,
  result: any,
  scored: number
  missed: number
  goal?: number | null,
  glasses?: number | null,
  place: number,
}
