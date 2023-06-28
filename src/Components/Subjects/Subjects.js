// import React from 'react'
// import { firestore } from "../Firebase/Firebase"
// import { doc, setDoc} from "@firebase/firestore"

// function Subjects() {
//     function addSubjects() {


//         //const ref = collection(firestore, "subjects")

//         const subjectsList = [
//             {
//               "career": "Ing. Industrial",
//               "id": 1,
//               "semester": 1,
//               "name": "Taller de expresion oral y escrita",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 2,
//               "semester": 1,
//               "name": "Algebra Lineal",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 3,
//               "semester": 1,
//               "name": "Contabilidad",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 4,
//               "semester": 1,
//               "name": "Quimica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 5,
//               "semester": 1,
//               "name": "Metodologia de la Programacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 6,
//               "semester": 1,
//               "name": "Introduccion a la ingenieria Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 7,
//               "semester": 1,
//               "name": "Persona y desarrollo Integral",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 8,
//               "semester": 1,
//               "name": "Introduccion al ingles",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 9,
//               "semester": 1,
//               "name": "Taller artistico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 10,
//               "semester": 2,
//               "name": "Costos 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 11,
//               "semester": 2,
//               "name": "Calculo diferencial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 12,
//               "semester": 2,
//               "name": "Administracion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 13,
//               "semester": 2,
//               "name": "Cinematica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 14,
//               "semester": 2,
//               "name": "Fundamentos de Programacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 15,
//               "semester": 2,
//               "name": "Persona y bien comun",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 16,
//               "semester": 2,
//               "name": "Ingles Basico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 17,
//               "semester": 2,
//               "name": "Taller artistio 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 18,
//               "semester": 3,
//               "name": "Costos 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 19,
//               "semester": 3,
//               "name": "Calculo integral",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 20,
//               "semester": 3,
//               "name": "Sistemas ERP y herramientas de administracion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 21,
//               "semester": 3,
//               "name": "Probabilidad y Estadistica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 22,
//               "semester": 3,
//               "name": "Investigacion Cuantitativa",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 23,
//               "semester": 3,
//               "name": "Competencias Globales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 24,
//               "semester": 3,
//               "name": "Ingles pre-intermedio",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 25,
//               "semester": 3,
//               "name": "Taller Deportivo",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 26,
//               "semester": 4,
//               "name": "Introduccion al Derecho",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 27,
//               "semester": 4,
//               "name": "Ecuaciones Diferenciales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 28,
//               "semester": 4,
//               "name": "Sistemas de Gestion de Calidad Empresarial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 29,
//               "semester": 4,
//               "name": "Administracion del Capital Humano",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 30,
//               "semester": 4,
//               "name": "Mercadotecnia",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 31,
//               "semester": 4,
//               "name": "Investigacion Cualitativa",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 32,
//               "semester": 4,
//               "name": "Persona y trascendencia",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 33,
//               "semester": 4,
//               "name": "Ingles Intermedio",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 34,
//               "semester": 4,
//               "name": "Taller Deportivo 3",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 35,
//               "semester": 5,
//               "name": "Optimizacion de Operaciones 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 36,
//               "semester": 5,
//               "name": "Dibujo Tecnico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 37,
//               "semester": 5,
//               "name": "Tecnologia de materiales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 38,
//               "semester": 5,
//               "name": "Estudio del trabajo 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 39,
//               "semester": 5,
//               "name": "Emprendimiento 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 40,
//               "semester": 5,
//               "name": "Metodologias Aplicadas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 41,
//               "semester": 5,
//               "name": "Libertad y plentitud",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 42,
//               "semester": 5,
//               "name": "Ingles Intermedio-Avanzado",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 43,
//               "semester": 6,
//               "name": "Optimizacion de Operaciones 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 44,
//               "semester": 6,
//               "name": "Diseño por Computadora",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 45,
//               "semester": 6,
//               "name": "Instrumentacion Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 46,
//               "semester": 6,
//               "name": "Estudio de Trabajo 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 47,
//               "semester": 6,
//               "name": "Emprendimiento 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 48,
//               "semester": 6,
//               "name": "Practicas Colaborativas de Investigacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 49,
//               "semester": 6,
//               "name": "Fundamentos de Telecomunicaciones",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 50,
//               "semester": 6,
//               "name": "Ingles Tecnico para Ingenierias",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 51,
//               "semester": 7,
//               "name": "Desarrollo Sustentable",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 52,
//               "semester": 7,
//               "name": "Procesos de Manufactura",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 53,
//               "semester": 7,
//               "name": "Localizacion y Distribucion de plantas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 54,
//               "semester": 7,
//               "name": "Ingenieria Economica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 55,
//               "semester": 7,
//               "name": "Circuitos Electricos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 56,
//               "semester": 7,
//               "name": "Control Estadistico de Procesos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 57,
//               "semester": 7,
//               "name": "Economia",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 58,
//               "semester": 7,
//               "name": "Planeacion y Control de la Producción",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 59,
//               "semester": 8,
//               "name": "Ingenieria en Sistemas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 60,
//               "semester": 8,
//               "name": "Formulacion y Evaluacion de Proyectos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 61,
//               "semester": 8,
//               "name": "Matematicas Financieras",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 62,
//               "semester": 8,
//               "name": "Circuitos neumaticos e Hidraulicos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 63,
//               "semester": 8,
//               "name": "Seguridad e higiene Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 64,
//               "semester": 8,
//               "name": "Desarrollo Organizacional",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 65,
//               "semester": 8,
//               "name": "Etica Profesional",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 66,
//               "semester": 9,
//               "name": "Administracion del Mantenimiento ",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 67,
//               "semester": 9,
//               "name": "Simulacion de Sistemas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 68,
//               "semester": 9,
//               "name": "Planeacion Estrategica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 69,
//               "semester": 9,
//               "name": "Diseño de Experimentos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 70,
//               "semester": 9,
//               "name": "Controladores Lógicos Programables",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Industrial",
//               "id": 71,
//               "semester": 9,
//               "name": "Tópicos Selectos de Ingenieria Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 72,
//               "semester": 1,
//               "name": "Taller de Expresion Oral y Escrita",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 73,
//               "semester": 1,
//               "name": "Algebra Lineal",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 74,
//               "semester": 1,
//               "name": "Contabilidad",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 75,
//               "semester": 1,
//               "name": "Quimica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 76,
//               "semester": 1,
//               "name": "Introduccion a la Mecatronica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 77,
//               "semester": 1,
//               "name": "Metodologia de la Programacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 78,
//               "semester": 1,
//               "name": "Persona y desarrollo Integral",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 79,
//               "semester": 1,
//               "name": "Introduccion al Ingles",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 80,
//               "semester": 1,
//               "name": "Taller artistico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 81,
//               "semester": 2,
//               "name": "Costos 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 82,
//               "semester": 2,
//               "name": "Calculo diferencial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 83,
//               "semester": 2,
//               "name": "Administracion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 84,
//               "semester": 2,
//               "name": "Cinematica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 85,
//               "semester": 2,
//               "name": "Electricidad y Magnetismo",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 86,
//               "semester": 2,
//               "name": "Fundamentos de Programacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 87,
//               "semester": 2,
//               "name": "Persona y bien comun",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 88,
//               "semester": 2,
//               "name": "Ingles Basico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 89,
//               "semester": 2,
//               "name": "Taller artistico 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 90,
//               "semester": 3,
//               "name": "Costos 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 91,
//               "semester": 3,
//               "name": "Calculo Integral",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 92,
//               "semester": 3,
//               "name": "Probabilidad y Estadistica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 93,
//               "semester": 3,
//               "name": "Mecanica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 94,
//               "semester": 3,
//               "name": "Circuitos Electricos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 95,
//               "semester": 3,
//               "name": "Investigacion Cuantitativa",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 96,
//               "semester": 3,
//               "name": "Competencias Globales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 97,
//               "semester": 3,
//               "name": "Ingles pre-intermedio",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 98,
//               "semester": 3,
//               "name": "Taller Deportivo 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 99,
//               "semester": 4,
//               "name": "Matematicas Discretas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 100,
//               "semester": 4,
//               "name": "Ecuaciones Diferenciales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 101,
//               "semester": 4,
//               "name": "Programacion Orientada a Objetos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 102,
//               "semester": 4,
//               "name": "Diseño de Mecanismos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 103,
//               "semester": 4,
//               "name": "Circuitos Electronicos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 104,
//               "semester": 4,
//               "name": "Investigacion Cualitativa",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 105,
//               "semester": 4,
//               "name": "Persona y trascendencia",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 106,
//               "semester": 4,
//               "name": "Ingles Intermedio",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 107,
//               "semester": 4,
//               "name": "Taller Deportivo 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 108,
//               "semester": 5,
//               "name": "Emprendimiento 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 109,
//               "semester": 5,
//               "name": "Dibujo Tecnico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 110,
//               "semester": 5,
//               "name": "Fundamentos de Base de Datos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 111,
//               "semester": 5,
//               "name": "Dibujo Electronico",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 112,
//               "semester": 5,
//               "name": "Electronica Analogica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 113,
//               "semester": 5,
//               "name": "Metodologias Aplicadas",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 114,
//               "semester": 5,
//               "name": "Libertad y plentitud",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 115,
//               "semester": 5,
//               "name": "Ingles Intermedio-Avanzado",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 116,
//               "semester": 6,
//               "name": "Emprendimiento 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 117,
//               "semester": 6,
//               "name": "Diseño por Computadora",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 118,
//               "semester": 6,
//               "name": "Instrumentacion Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 119,
//               "semester": 6,
//               "name": "Amplificaciones Operacionales",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 120,
//               "semester": 6,
//               "name": "Introduccion al Derecho",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 121,
//               "semester": 6,
//               "name": "Practicas Colaborativas de Investigacion",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 122,
//               "semester": 6,
//               "name": "Termodinamica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 123,
//               "semester": 6,
//               "name": "Ingles Tecnico para Ingenierias",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 124,
//               "semester": 7,
//               "name": "Ingenieria Economica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 125,
//               "semester": 7,
//               "name": "Procesos de Manufactura",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 126,
//               "semester": 7,
//               "name": "Instrumentacion Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 127,
//               "semester": 7,
//               "name": "Control",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 128,
//               "semester": 7,
//               "name": "Electronica Digital",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 129,
//               "semester": 7,
//               "name": "Electronica de Potencia",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 130,
//               "semester": 7,
//               "name": "Ingenieria Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 131,
//               "semester": 8,
//               "name": "Formulacion y Evaluacion de Proyectos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 132,
//               "semester": 8,
//               "name": "Seguridad e higiene Industrial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 133,
//               "semester": 8,
//               "name": "Etica Profesional",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 134,
//               "semester": 8,
//               "name": "Fundamentos de Robotica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 135,
//               "semester": 8,
//               "name": "Diseño Digital",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 136,
//               "semester": 8,
//               "name": "Motores y Generadores",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 137,
//               "semester": 8,
//               "name": "Sistemas de Gestion de Calidad Empresarial",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 138,
//               "semester": 8,
//               "name": "Controladores Lógicos Programables",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 139,
//               "semester": 9,
//               "name": "Administracion de Mantenimiento",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 140,
//               "semester": 9,
//               "name": "Circuitos neumaticos e Hidraulicos",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 141,
//               "semester": 9,
//               "name": "Robotica",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 142,
//               "semester": 9,
//               "name": "Microprocesadores",
//               "hours": 4
//             },
//             {
//               "career": "Ing. Mecatronica",
//               "id": 143,
//               "semester": 9,
//               "name": "Redes Industriales y de Computadora",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 144,
//               "semester": 1,
//               "name": "Taller de expresión oral y escrita.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 145,
//               "semester": 1,
//               "name": "Álgebra lineal.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 146,
//               "semester": 1,
//               "name": "Contabilidad.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 147,
//               "semester": 1,
//               "name": "Química.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 148,
//               "semester": 1,
//               "name": "Metodología de la programación.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 149,
//               "semester": 1,
//               "name": "Contabilidad.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 150,
//               "semester": 1,
//               "name": "Introducción a la Ingeniería en Sistemas Computacionales.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 151,
//               "semester": 1,
//               "name": "Persona y desarrollo integral.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 152,
//               "semester": 1,
//               "name": "Introducción al inglés.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 153,
//               "semester": 1,
//               "name": "Taller artístico.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 154,
//               "semester": 2,
//               "name": "Introducción a la seguridad criptográfica.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 155,
//               "semester": 2,
//               "name": "Informática.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 156,
//               "semester": 2,
//               "name": "Cálculo diferencial.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 157,
//               "semester": 2,
//               "name": "Administración.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 158,
//               "semester": 2,
//               "name": "Cinemática.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 159,
//               "semester": 2,
//               "name": "Fundamentos de programación.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 160,
//               "semester": 2,
//               "name": "Matemáticas discretas.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 161,
//               "semester": 2,
//               "name": "Persona y bien común.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 162,
//               "semester": 2,
//               "name": "Inglés básico.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 163,
//               "semester": 2,
//               "name": "Taller artístico 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 164,
//               "semester": 3,
//               "name": "Programación orientada a objetos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 165,
//               "semester": 3,
//               "name": "Cálculo integral.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 166,
//               "semester": 3,
//               "name": "Mecánica.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 167,
//               "semester": 3,
//               "name": "Probabilidad y estadística.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 168,
//               "semester": 3,
//               "name": "Investigación cuantitativa.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 169,
//               "semester": 3,
//               "name": "Competencias globales.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 170,
//               "semester": 3,
//               "name": "Inglés pre-intermedio.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 171,
//               "semester": 3,
//               "name": "Taller deportivo 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 172,
//               "semester": 4,
//               "name": "Ecuaciones diferenciales.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 173,
//               "semester": 4,
//               "name": "Sistemas de gestión de calidad empresarial.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 174,
//               "semester": 4,
//               "name": "Estructura de datos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 175,
//               "semester": 4,
//               "name": "Teoría de la computación.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 176,
//               "semester": 4,
//               "name": "Investigación cuantitativa.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 177,
//               "semester": 4,
//               "name": "Persona y trascendencia.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 178,
//               "semester": 4,
//               "name": "Inglés intermedio.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 179,
//               "semester": 4,
//               "name": "Taller deportivo 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 180,
//               "semester": 5,
//               "name": "Codificación y compresión de datos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 181,
//               "semester": 5,
//               "name": "Fundamentos de bases de datos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 182,
//               "semester": 5,
//               "name": "Matemáticas para la criptografía.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 183,
//               "semester": 5,
//               "name": "Ambientes web.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 184,
//               "semester": 5,
//               "name": "Emprendimiento 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 185,
//               "semester": 5,
//               "name": "Metodologías aplicadas.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 186,
//               "semester": 5,
//               "name": "Libertad y plenitud.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 187,
//               "semester": 5,
//               "name": "Inglés intermedio-avanzado.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 188,
//               "semester": 6,
//               "name": "Marco Normativo de la Gestión de la Seguridad de la Información.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 189,
//               "semester": 6,
//               "name": "Diseño de algoritmos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 190,
//               "semester": 6,
//               "name": "Taller de bases de datos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 191,
//               "semester": 6,
//               "name": "Protocolos de criptografía.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 192,
//               "semester": 6,
//               "name": "Emprendimiento 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 193,
//               "semester": 6,
//               "name": "Prácticas colaborativas de investigación.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 194,
//               "semester": 6,
//               "name": "Inglés técnico para ingenierías.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 195,
//               "semester": 7,
//               "name": "Administración de seguridad informática.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 196,
//               "semester": 7,
//               "name": "Sistemas operativos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 197,
//               "semester": 7,
//               "name": "Ingeniería de software.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 198,
//               "semester": 7,
//               "name": "Economía.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 199,
//               "semester": 7,
//               "name": "Redes de datos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 200,
//               "semester": 7,
//               "name": "Programación web.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 201,
//               "semester": 7,
//               "name": "Criptografía aplicada.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 202,
//               "semester": 7,
//               "name": "Desarrollo sustentable.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 203,
//               "semester": 8,
//               "name": "Inteligencia artificial.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 204,
//               "semester": 8,
//               "name": "Informática forense.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 205,
//               "semester": 8,
//               "name": "Seguridad en sistemas operativos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 206,
//               "semester": 8,
//               "name": "Técnicas de simulación.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 207,
//               "semester": 8,
//               "name": "Seguridad de redes de datos 1",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 208,
//               "semester": 8,
//               "name": "Arquitectura de computadoras.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 209,
//               "semester": 8,
//               "name": "Criptografía basada en hardware.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 210,
//               "semester": 8,
//               "name": "Ética profesional.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 211,
//               "semester": 9,
//               "name": "Formulación y evaluación de proyectos.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 212,
//               "semester": 9,
//               "name": "Seguridad en aplicaciones.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 213,
//               "semester": 9,
//               "name": "Auditoría informática.",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 214,
//               "semester": 9,
//               "name": "Seguridad de redes de datos 2",
//               "hours": 4
//             },
//             {
//               "career": "Ing. en Sistemas",
//               "id": 215,
//               "semester": 9,
//               "name": "Análisis de riesgo.",
//               "hours": 4
//             }
//            ]
         

//         subjectsList.map(subject => {
//             try {
//                 setDoc(doc(firestore, "subjects", `${subject.id}`), subject);
//             } catch (e) {
//                 console.log(e);
//             }
//         })
//     }

//     return (
//         <button onClick={addSubjects}>Agregar Materias</button>
//     )
// }

// export default Subjects