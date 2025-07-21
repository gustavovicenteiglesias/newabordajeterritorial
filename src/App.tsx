import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ViviendaList from './pages/ViviendaList';
import IntegranteList from './pages/IntegranteList';
import ViviendaForm from './pages/ViviendaForm';

import "./App.css";
import IntegranteFormPage from './pages/IntegranteFormPage';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <ViviendaList/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route> 
        <Route path={"/integrantes/:viviendaId"}><IntegranteList/></Route>
        <Route path={"/viviendas/:viviendaId"}><ViviendaForm/></Route>
        <Route path="/nuevo/integrantes/:viviendaId/:integrantesid" exact><IntegranteFormPage/></Route>
        <Route path="/edit/integrantes/:viviendaId/:integrantesid" exact><IntegranteFormPage/></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
