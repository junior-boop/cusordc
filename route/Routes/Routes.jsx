import { Routes, Route} from 'react-router-dom'
import Profils_Modification_Page from '../../src/Layouts/profils_modification'
import Accueil from '../accueil'
import Profils_Page from '../../src/Layouts/profils_page'
import Carriere from '../carriere'
import Cours from '../cours'
import Messagerie from '../messagerie'


export default function AppRoute(){
    return(
        <Routes >
            <Route path='/' element = {<Accueil />}/>
            <Route path='/carriere' element = {<Carriere />}/>
            <Route path='/formation' element = {<Cours/>}/>
            <Route path='/messagerie' element = {<Messagerie/>}/>
            <Route path='/user' element = {<Profils_Page />}  />
            <Route path='/user_modification' element = {<Profils_Modification_Page/>}  />
        </Routes>
    )
}