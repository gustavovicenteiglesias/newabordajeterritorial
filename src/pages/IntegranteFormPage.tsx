// src/pages/IntegranteForm.tsx
import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import {
  buscarporintegrante,
  createIntegrante,
  updateIntegrante,
} from "../services/IntegranteService";
import IntegantesHeader from "../components/IntegrantesForm/IntegrantesHeader";
import moment from "moment";
import IntegrantesCoberturaForm from "../components/IntegrantesForm/IntegrantesCoberturaForm";
import IntegrantesEscolaridadForm from "../components/IntegrantesForm/IntegrantesEscolaridadForm";
import IntegrantesPensionForm from "../components/IntegrantesForm/IntegrantesPensionForm";
import IntegrantesEsquemaVacunacionForm from "../components/IntegrantesForm/IntegrantesEsquemaVacunacion";
import IntegranteEmbarazoForm from "../components/IntegrantesForm/IntegrantesEmbarazoForm";
import { Integrante } from "../models/Integrante";
import { error } from "console";
import IntegrantesEcntForm from "../components/IntegrantesForm/IntegrantesEcntForm";
import IntegrantesHasActividadForm from "../components/IntegrantesForm/IntegrantesHasActividadForm";
import IntegrantesHasMacForm from "../components/IntegrantesForm/IntegrantesHasMAcForm";
import IntegrantesProblemasForm from "../components/IntegrantesForm/IntegrantesHasProblemasForm";
import { saveProblemasPorIntegrante } from "../services/IntegrantesHasProblemasService";

const initialValues: any = {
  idIntegrantes: 0,
  nombre: "",
  apellido: "",
  genero: "",
  edad: 0,
  fechanacimiento: null,
  tuvoCovid: 0,
  fumador: 0,
  controlSalud: 0,
  pap: "",
  mamografia: "",
  embarazo: 0,
  fpp: "",
  edadGestacional: null,
  controlesPrenatales: null,
  embarazoRiesgo: 0,
  dni: 0,
  latitud: 0,
  longitud: 0,
  otroproblema: null,
  macIdMac: null, 
  coberturaSaludIdCoberturaSalud: 999,
  escolaridadIdEscolaridad: 12,
  pensionIdPension: 999,
  esquemaVacunacionIdEsquemaVacunacion: 999,
  finalizacionEmbarazoIdFinalizacionEmbarazo: 999,
  vacunaCovidIdVacunaCovid: 999,
  viviendasIdViviendas: 0,
  lastModified: 0,
  sqlDeleted: 0,
  ecntseleccionados: [] as number[],
  actividadseleccionados: [] as number[],
  problemasseleccionados: [] as number[],
  macsseleccionados: [] as number[],

};
const IntegranteForm: React.FC = () => {
  const { viviendaId } = useParams<{ viviendaId: string }>();
  const { integrantesid } = useParams<{ integrantesid: string }>();
  const [integrantes, setIntegrantes] = useState<Integrante>(initialValues);
  const [loading, setLoading] = useState<boolean>(false);


  const history = useHistory();

  console.log("Integrantes", integrantesid);

  useEffect(() => {
    const id = parseInt(integrantesid);
    if (id === 0) {
      setIntegrantes(initialValues);
    } else {
      buscarporintegrante(id)
        .then((resp) => {
          console.log(resp.data.data);
          setIntegrantes(resp.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const IntegrantesSchema = Yup.object({
    nombre: Yup.string().required("Campo obligatorio"),
    apellido: Yup.string().required("Campo obligatorio"),
    //edad: Yup.number().required("Campo obligatorio").min(0),
    //dni: Yup.number().required("Campo obligatorio"),
    //genero: Yup.string().required(),
  });
  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      console.log(values);
      console.log(moment().diff(moment(values.fechanacimiento), 'years'))
      const integranteGuardado=parseInt(integrantesid)
      const newIntegrantes:Integrante={
        idIntegrantes: values.idIntegrantes,
        apellido: values.apellido,
        nombre: values.nombre,
        genero: values.genero,
        edad: moment().diff(moment(values.fechanacimiento), 'years'),
        fechanacimiento: moment(values.fechanacimiento).format("YYYY-MM-DD"),
        tuvoCovid: values.tuvoCovid,
        fumador: values.fumador,
        controlSalud: values.fumador,
        pap: values.pap,
        mamografia:values.mamografia,
        embarazo: values.embarazo,
        fpp: values.fpp,
        edadGestacional: values.edadGestacional,
        controlesPrenatales: values.controlesPrenatales,
        embarazoRiesgo: values.embarazoRiesgo,
        dni: values.dni,
        latitud: values.latitud,
        longitud: values.longitud,
        otroproblema: values.otoproblema,
        macIdMac: values.macIdMac,
        coberturaSaludIdCoberturaSalud: values.coberturaSaludIdCoberturaSalud,
        escolaridadIdEscolaridad: values.escolaridadIdEscolaridad,
        pensionIdPension: values.pensionIdPension,
        esquemaVacunacionIdEsquemaVacunacion: values.esquemaVacunacionIdEsquemaVacunacion,
        finalizacionEmbarazoIdFinalizacionEmbarazo: values.finalizacionEmbarazoIdFinalizacionEmbarazo,
        vacunaCovidIdVacunaCovid: values.vacunaCovidIdVacunaCovid,
        viviendasIdViviendas: parseInt(viviendaId),
        lastModified: Math.floor(Date.now() / 1000),
        sqlDeleted: 0
      }
      
      if (newIntegrantes.idIntegrantes===0){
          const res=await createIntegrante(newIntegrantes);
            console.log("Integrante nuevo")
           

      }else{
          await updateIntegrante(newIntegrantes.idIntegrantes,newIntegrantes);
          console.log("Integrante cambiado")
      }

      await saveProblemasPorIntegrante(
        integranteGuardado,
        values.problemasseleccionados
      )
      console.log("Problemas guardados")
      setLoading(false)
      /*await createIntegrante({
          ...values,
          idIntegrantes: 0,
          lastModified: Math.floor(Date.now() / 1000),
          sqlDeleted: 0,
          viviendasIdViviendas: parseInt(viviendaId),
        });
        history.push(`/integrantes/${viviendaId}`);*/
    } catch (error) {
      setLoading(false)
      console.error("Error al guardar:", error);
    }
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
      <IonContent className="ion-padding">
        <Formik
          initialValues={integrantes}
          validationSchema={IntegrantesSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ handleChange, values, errors, touched, setFieldValue }) => (
            <Form>
              <IntegantesHeader
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <IntegrantesCoberturaForm
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <IntegrantesEscolaridadForm
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />

              <IntegrantesHasActividadForm
                values={values}
                setFieldValue={setFieldValue}
              />
              <IntegrantesPensionForm
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <IntegrantesEsquemaVacunacionForm
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <IntegrantesEcntForm
                values={values}
                setFieldValue={setFieldValue}
              />
              <IntegrantesHasMacForm
                values={values}
                setFieldValue={setFieldValue}
              />

              <IntegranteEmbarazoForm
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
              <IntegrantesProblemasForm
                values={values}
                setFieldValue={setFieldValue}
              />
              <IonButton expand="block" type="submit">
                {loading ? "Guardando...." : "Guardar"}
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default IntegranteForm;
