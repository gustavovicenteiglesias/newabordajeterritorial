import {
  IonButton,
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from "@ionic/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {
  createVivienda,
  getViviendaById,
  updateVivienda,
} from "../services/ViviendaService";
import { getAllBarrios } from "../services/BarriosService";
import { getAllCaps } from "../services/CapsService";
import {
  createZoonosis,
  getAllZoonosis,
  updateZoonosis,
} from "../services/ZoonosisService";
import { getAllMotivos } from "../services/MotivosRechasoService";
import {
  createContacto,
  getAllContactos,
  getContactoById,
  updateContacto,
} from "../services/ContactosService";
import {
  getAllCondiciones,
  updateCondicion,
  createCondicion,
} from "../services/CondicionesSocioSanitariasService";
import { Vivienda } from "../models/Vivienda";
import { Barrios } from "../models/Barrios";
import { Caps } from "../models/Caps";
import { Zoonosis } from "../models/Zoonosis";
import { MotivosRechaso } from "../models/MotivosRechaso";
import { Contactos } from "../models/Contactos";
import { CondicionesSocioSanitarias } from "../models/CondicionesSocioSanitarias";
import { useParams } from "react-router";
import moment from "moment";
import { CondicionesSocioSanitariasI } from "../models/CondicionesSocioSanitariasI";
import { buildViviendaPayload } from "../utils/buildViviendaPayload";
import ViviendaHeader from "../components/ViviendaForm/ViviendaHeader";
import FechaForm from "../components/ViviendaForm/FechaForm";
import UbicacionForm from "../components/ViviendaForm/UbicacionForm";
import SelectBarrioCapsForm from "../components/ViviendaForm/SelectBarrioCapsForm";
import AccesoViviendaForm from "../components/ViviendaForm/AccesoViviendaForm";
import ContactoForm from "../components/ViviendaForm/ContactosForm";
import CondicionesForm from "../components/ViviendaForm/CondicionesForm";
import PerrosForm from "../components/ViviendaForm/PerrosForm";
import VectoresForm from "../components/ViviendaForm/VectoresForm";
import SaludGeneralYSociedad from "../components/ViviendaForm/SaludGeneralYSociedad";
import AtencionEfectoresForm from "../components/ViviendaForm/AtencionEfectoresForm";
import { saveEfectoresSeleccionados } from "../services/ViviendasHasEfectoresService";
import { saveCausasSeleccionadas } from "../services/ViviendasHasCausasSeleccionService";
const initialValues: any = {
  idViviendas: 0,
  nroManzana: 0,
  nroCasa: "",
  calle: "",
  latitud: 0,
  longitud: 0,
  accesoVivienda: 0,
  perros: 0,
  cierre: 0,
  agenteSanitario: "",
  fecha: moment().format("YYYY-MM-DD"),
  saludAsisteComedorl: 0,
  saludCultiva: 0,
  saludCompos: 0,
  saludSepara: 0,
  lastModified: 0,
  sqlDeleted: 0,
  motivosRechasoIdmotivosRechaso: 0,
  zoonosisIdZoonosis: 0,
  vectoresExistenMateriales: 0,
  contactosIdContactos: 0,
  condicionesSocioSanitariasIdCondicionesSocioSanitarias: 0,
  capsIdCaps: 0,
  vectoresExixteRoedores: null,
  barriosIdBarrios: 0,
  contactoApellido: "",
  contactoTelefono: "",
  contactoInfo: 0,
  nroIntegrantes: 0,
  nroHabitaciones: 0,
  tieneAguaCorriente: "NO",
  tieneCloaca: "NO",
  tipoViviendasIdTipoViviendas: 0,
  gasIdGas: 0,
  recoleccionReciduosIdRecoleccionReciduos: 0,
  cantidadAnimales: 0,
  vacunados: 0,
  castrados: 0,
  efectoresSeleccionados: [] as number[],
  causasSeleccionadas: [] as number[],
};

const ViviendaSchema = Yup.object().shape({
  nroManzana: Yup.number().required("Requerido"),
  nroCasa: Yup.string().required("Requerido"),
  calle: Yup.string().required("Requerido"),
  latitud: Yup.number().required(),
  longitud: Yup.number().required(),
  agenteSanitario: Yup.string().required("Requerido"),
  fecha: Yup.string().required("Requerido"),
});

const ViviendaForm = () => {
  const { viviendaId } = useParams<{ viviendaId: string }>();
  const [viviendas, setViviendas] = useState<Vivienda>(initialValues);
  const [barrios, setBarrios] = useState<Barrios[]>([]);
  const [caps, setCaps] = useState<Caps[]>([]);

  useEffect(() => {
    const id = parseInt(viviendaId);
    if (id === 0) {
      setViviendas(initialValues);
    } else {
      getViviendaById(id).then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setViviendas(res.data.data);
        } else {
          setViviendas(initialValues);
        }
      });
    }
  }, [viviendaId]);
  useEffect(() => {
    getAllBarrios().then((res) => setBarrios(res.data.data));
    getAllCaps().then((res) => setCaps(res.data.data));
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      const contactoPayload: Contactos = {
        apellido: values.contactoApellido,
        telefono: values.contactoTelefono,
        info: values.contactoInfo,
        lastModified: Math.floor(Date.now() / 1000),
        sqlDeleted: 0,
        idContactos: values.contactosIdContactos,
      };

      let contactoId = values.contactosIdContactos;

      // Crear o actualizar contacto
      if (contactoId === 0) {
        const contactoRes = await createContacto(contactoPayload);
        contactoId = contactoRes.data.data.idContactos; // ajustá si el backend devuelve otra estructura
        console.log("creo");
      } else {
        await updateContacto(contactoId, {
          ...contactoPayload,
          idContactos: contactoId,
        });
        console.log("cambioo");
      }
      // 2. CONDICIONES SOCIOSANITARIAS
      const condicionesPayload: CondicionesSocioSanitarias = {
        nroIntegrantes: values.nroIntegrantes,
        nroHabitaciones: values.nroHabitaciones,
        tieneAguaCorriente: values.tieneAguaCorriente,
        tieneCloaca: values.tieneCloaca,
        tipoViviendasIdTipoViviendas: values.tipoViviendasIdTipoViviendas,
        gasIdGas: values.gasIdGas,
        recoleccionReciduosIdRecoleccionReciduos:
          values.recoleccionReciduosIdRecoleccionReciduos || null,
        lastModified: Math.floor(Date.now() / 1000),
        sqlDeleted: 0,
        idCondicionesSocioSanitarias:
          values.condicionesSocioSanitariasIdCondicionesSocioSanitarias,
      };

      let condicionesId =
        values.condicionesSocioSanitariasIdCondicionesSocioSanitarias;
      console.log(condicionesPayload);

      if (condicionesId === 0) {
        const res = await createCondicion(condicionesPayload);
        condicionesId = res.data.data.idCondicionesSocioSanitarias;
        console.log("Creo condiciones");
      } else {
        const resp = await updateCondicion(condicionesId, {
          ...condicionesPayload,
          idCondicionesSocioSanitarias: condicionesId,
        });
        console.log("Cambio condiciones");
      }
      const zoonosisPayload: Zoonosis = {
        cantidad: values.cantidadAnimales,
        vacunados: values.vacunados,
        castrados: values.castrados,
        lastModified: Math.floor(Date.now() / 1000),
        sqlDeleted: 0,
        idZoonosis: values.zoonosisIdZoonosis,
      };

      let zoonosisId = values.zoonosisIdZoonosis;
      console.log(zoonosisPayload);

      if (zoonosisId === 0) {
        const res = await createZoonosis(zoonosisPayload);
        zoonosisId = res.data.data.idZoonosis;
      } else {
        await updateZoonosis(zoonosisId, {
          ...zoonosisPayload,
          idZoonosis: zoonosisId,
        });
      }
      // Crear o actualizar vivienda

      const viviendaPayload = buildViviendaPayload({
        ...values,
        contactosIdContactos: contactoId,
        condicionesSocioSanitariasIdCondicionesSocioSanitarias: condicionesId,
      });
      console.log(viviendaPayload);
      // Guardar la vivienda y obtener el ID (en caso de que sea nueva)
      let viviendaIdGuardada = parseInt(viviendaId);
      if (viviendaIdGuardada === 0) {
        const res = await createVivienda({
          ...viviendaPayload,
          zoonosisIdZoonosis: zoonosisId,
          contactosIdContactos: contactoId,
          condicionesSocioSanitariasIdCondicionesSocioSanitarias: condicionesId,
        });
        viviendaIdGuardada = res.data.data.idViviendas;
        alert("Vivienda creada correctamente");
      } else {
        await updateVivienda(viviendaIdGuardada, {
          ...viviendaPayload,
          zoonosisIdZoonosis: zoonosisId,
          contactosIdContactos: contactoId,
          condicionesSocioSanitariasIdCondicionesSocioSanitarias: condicionesId,
        });
        alert("Vivienda actualizada correctamente");
      }

      // Guardar relaciones con efectores
      await saveEfectoresSeleccionados(
        viviendaIdGuardada,
        values.efectoresSeleccionados
      );

      // Guardar relaciones con causas de elección
      await saveCausasSeleccionadas(
        viviendaIdGuardada,
        values.causasSeleccionadas
      );
      alert("Datos guardados correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Formik
          initialValues={viviendas}
          validationSchema={ViviendaSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ handleChange, values, errors, touched, setFieldValue }) => (
            <Form>
              <ViviendaHeader values={values} handleChange={handleChange} />
              <SelectBarrioCapsForm
                values={values}
                handleChange={handleChange}
                barrios={barrios}
                caps={caps}
              />
              <FechaForm value={values.fecha} setFieldValue={setFieldValue} />
              <UbicacionForm values={values} handleChange={handleChange} />
              <AccesoViviendaForm
                value={values.accesoVivienda}
                setFieldValue={setFieldValue}
              />
              {values.accesoVivienda === 1 && (
                <>
                  <ContactoForm
                    idContacto={values.contactosIdContactos}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <CondicionesForm
                    idCondiciones={
                      values.condicionesSocioSanitariasIdCondicionesSocioSanitarias
                    }
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <PerrosForm values={values} setFieldValue={setFieldValue} />
                  <VectoresForm values={values} setFieldValue={setFieldValue} />
                  <SaludGeneralYSociedad
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <AtencionEfectoresForm
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </>
              )}
              <IonButton expand="block" type="submit">
                Guardar
              </IonButton>
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default ViviendaForm;
