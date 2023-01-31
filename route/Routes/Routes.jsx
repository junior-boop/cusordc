import { Routes, Route} from 'react-router-dom'
import Profils_Modification_Page from '../../src/Layouts/profils_modification'
import Accueil from '../accueil'


export default function AppRoute(){
    return(
        <Routes >
            <Route path='/' element = {<Accueil/>}/>
            <Route path='/user_modification' element = {<Profils_Modification_Page/>}  />
        </Routes>
    )
}