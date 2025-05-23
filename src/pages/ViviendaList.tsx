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
  IonButton,
  IonIcon,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonNote,
} from '@ionic/react';
import { arrowForward, chevronBack, chevronForward } from 'ionicons/icons';
import { getPagedViviendas } from '../services/ViviendaService';
import { Vivienda } from '../models/Vivienda';

const ViviendaList: React.FC = () => {
  const [viviendas, setViviendas] = useState<Vivienda[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalViviendas,setTotalViviendas]=useState(0);

  const loadData = async () => {
    const res = await getPagedViviendas(page, 20);
    if (res.data.success) {
      setTotalViviendas(res.data.totalElements)
      setViviendas(res.data.data);
      setTotalPages(res.data.totalPages);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000);
    return d.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Viviendas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel slot="end">Entradas </IonLabel>
            <IonNote slot="end">{totalViviendas}</IonNote>
          </IonItem>
        </IonList>
        <IonList>
          {viviendas.map((v,i) => (
            <IonItem key={i} button routerLink={`/viviendas/${v.idViviendas}`}>
              <IonLabel>
                <h2>{v.calle} {v.nroCasa}</h2>
                <p>Modificada: {formatDate(v.lastModified)}</p>
              </IonLabel>
              <IonButton slot="end" fill="clear" routerLink={`/integrantes/${v.idViviendas}`}>
                <IonIcon icon={arrowForward} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow class="ion-align-items-center ion-justify-content-center">
              <IonCol size="auto">
                <IonButton
                  disabled={page === 0}
                  onClick={() => setPage((prev) => Math.max(0, prev - 1))}
                >
                  <IonIcon icon={chevronBack} />
                </IonButton>
              </IonCol>
              <IonCol size="auto">
                Página {page + 1} de {totalPages}
              </IonCol>
              <IonCol size="auto">
                <IonButton
                  disabled={page + 1 >= totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  <IonIcon icon={chevronForward} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ViviendaList;
