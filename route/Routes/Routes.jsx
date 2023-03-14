import { Routes, Route} from 'react-router-dom'
import Profils_Modification_Page from '../../src/Layouts/profils_modification'
import Accueil from '../accueil'
import Profils_Page from '../../src/Layouts/profils_page'
import Cours from '../cours'
import Messagerie from '../messagerie'
import Service_modify from '../service/service_modify'
import Service_Page from '../../src/Layouts/service'


export default function AppRoute(){
    return(
        <Routes >
            <Route path='/' element = {<Accueil />}/>
            <Route path='/service' element = {<Service_Page />}/>
            <Route path='/service_edit' element = {<Service_modify />}/>
            <Route path='/formation' element = {<Cours/>}/>
            <Route path='/messagerie' element = {<Messagerie/>}/>
            <Route path='/user' element = {<Profils_Page />}  />
            <Route path='/user_modification' element = {<Profils_Modification_Page/>}  />
        </Routes>
    )
}