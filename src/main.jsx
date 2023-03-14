import React, { Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import Index from '../navigation/navigation'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './gx/store'
import GXProvider from '@dilane3/gx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <GXProvider store={store}>
      <Router>
        <Index />
      </Router>
    </GXProvider>
  </Fragment>,
)
