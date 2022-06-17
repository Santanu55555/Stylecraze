import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { CuteHeader } from './CuteHeader'
import { HAIRcareMain } from './HAIRcareMain'
import { Makeup } from './Makeup'
export const AllROutes = () => {
  return (
    <div>
        <Routes>

            <Route path ="/makeup" element={<Makeup/>}/>
<Route path="/" element={<CuteHeader/>}/>
<Route path='/haircare' element={<HAIRcareMain/>}/>
        </Routes>
    </div>
  )
}
