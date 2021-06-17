import { stateMappingData } from '../public/data/allStates'

export function getAllStateIds() {
  return stateMappingData.map(state => {
    return {
      params: {
        id: state.id,
      }
    }
  })
}

export function getAllStateData() {
  return stateMappingData.map(state => {
    return {
      params: {
        id: state.id,
        val: state.val,
        name: state.stateName
      }
    }
  })
}


export async function getStateData(id: string) {
  return {
    id
  }
}