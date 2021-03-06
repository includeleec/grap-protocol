import { useContext } from 'react'
import { Context as FarmsContext } from '../contexts/Farms'

const useFarms = (isAdv?:Boolean) => {
  const { farms } = useContext(FarmsContext)
  return [farms.filter((farm)=> (isAdv === undefined || farm.isAdv === isAdv))]
}

export default useFarms