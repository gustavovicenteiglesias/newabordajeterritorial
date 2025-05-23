import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { cloudDone, desktop } from 'ionicons/icons';
import { getIntegrantesByViviendaId } from '../services/IntegranteService';
import { Integrante } from '../models/Integrante';

const IntegranteList: React.FC = () => {
  const { viviendaId } = useParams<{ viviendaId: string }>(); 
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
  

  useEffect(() => {
    getIntegrantesByViviendaId(parseInt(viviendaId)).then((res) => {
      console.log(res.data.data)  
      const data = res.data.data;
      const sorted = data.sort((a, b) => b.lastModified - a.lastModified);
      setIntegrantes(sorted);
    });
  }, [viviendaId]);

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000);
    return d.toLocaleString();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>INTEGRANTES</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {integrantes.map((i,index) => (
            <IonItem key={index}>
            { /* <IonIcon icon={desktop} slot="start" />
              <IonIcon icon={cloudDone} slot="start" color="success" />*/}
              <IonLabel>
                <h2>{i.apellido} {i.nombre} {i.edad}</h2>
                <p>Recogida en {formatDate(i.lastModified)}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default IntegranteList;
