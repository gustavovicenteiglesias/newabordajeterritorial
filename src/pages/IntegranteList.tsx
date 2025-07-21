import React, { useEffect, useState } from "react";
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
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { Link, useParams } from "react-router-dom";
import { cloudDone, desktop } from "ionicons/icons";
import { getIntegrantesByViviendaId } from "../services/IntegranteService";
import { Integrante } from "../models/Integrante";
import { IonFab, IonFabButton } from "@ionic/react";
import { add } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const IntegranteList: React.FC = () => {
  const { viviendaId } = useParams<{ viviendaId: string }>();
  const [integrantes, setIntegrantes] = useState<Integrante[]>([]);

  const history = useHistory();

  useEffect(() => {
    getIntegrantesByViviendaId(parseInt(viviendaId)).then((res) => {
      console.log(res.data.data);
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
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Integrante</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          onClick={() => {
            history.push(`/nuevo/integrantes/${viviendaId}/0`);
            window.location.reload();
          }} // <Link to={`/integrantes/${viviendaId}/nuevo`}/>} }
        >
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonContent>
        <IonList>
          {integrantes.map((i, index) => (
            <IonItem
              key={index}
              button
              routerLink={`/edit/integrantes/${viviendaId}/${i.idIntegrantes}`}
            >
              <IonLabel>
                <h2>
                  {i.apellido} {i.nombre} {i.edad}
                </h2>
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
