export interface LinkDto {
  id?: number,
  operator: string,
  linkName: string,
  cityA: string,
  zipCodeA: string,
  streetA: string,
  cityB: string,
  zipCodeB: string,
  streetB: string,
  linkLength: string,
  subscriptionFee: number,
  technology: string,
  description: string,
}
