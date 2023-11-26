export interface IMinicamp {
  id?: number
  title: string;
  description: string;
  trainerName: string;
  trainerTitle: string;
  trainerPicture: string;
  batch: string;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}

export interface IMinicampState {
  list: {
    data: IMinicamp[]
    isLoading: boolean
    isError: boolean
  },
  detail: {
    data: IMinicamp | null
    isLoading: boolean
    isError: boolean
  }
}