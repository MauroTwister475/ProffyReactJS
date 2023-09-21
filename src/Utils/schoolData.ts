export const subjects = [
  { name: 'Selecione uma opção' },
  { name: 'Física' },
  { name: 'Quimica' },
  { name: 'Matematica'},
  { name: 'Programação' },
  { name: 'Historia' },
  { name: 'Ciências' },
  { name: 'Redes' },
];

export const weekday_db = [
  { name: 'Selecione uma opção' },
  { name: 'Domingo' },
  { name: 'Segunda' },
  { name: 'Terça'},
  { name: 'Quarta' },
  { name: 'Quinta' },
  { name: 'Sexta' },
  { name: 'Sábado' },
];

export interface ProffyInfo {
  id: string,
  name: string,
  avatar: string,
  whatsApp: string,
  biografia: string,
  subject: string,
  cost: string,
  weekday: string,
  time_from: string,
  time_to: string,
}