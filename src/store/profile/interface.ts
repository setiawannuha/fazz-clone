export interface IProfile {
  id?: number
  email: string
}

export interface IProfileState {
  detail: {
    data: IProfile | null
    isLoading: boolean
    isError: boolean
  }
}