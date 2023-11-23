import {reactive} from 'vue'

export interface IDetailMinicamp {
  id: number;
  created_at: string;
  title: string;
  description: string;
  trainerName: number;
  trainerTitle: string;
  trainerPicture: string;
  batch: number;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}

interface IStateMinicamp {
  detail : IDetailMinicamp | null
}

export const state = reactive<IStateMinicamp>({
  detail: null
})

export const actions = {
  detailMinicampFulfilled : (detail: IDetailMinicamp) => {
    state.detail = detail
  }
}