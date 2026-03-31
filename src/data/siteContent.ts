import type { ContactCard, ProcessStep, Service, TeamMember } from './types'

export const services: Service[] = [
  {
    title: '.NET razvoj',
    description:
      'Gradimo stabilne backend sisteme, API-je i poslovne aplikacije koje su spremne za rast.',
  },
  {
    title: 'Azure cloud',
    description:
      'Postavljamo infrastrukturu, deployment tokove i cloud arhitekturu koja je pregledna i odrziva.',
  },
  {
    title: 'Frontend iskustvo',
    description:
      'Pravimo brze i jasne interfejse u kojima korisnik brzo dolazi do onoga sto mu treba.',
  },
]

export const differentiators = [
  'Kombinujemo backend, cloud i frontend u jednom malom i fokusiranom timu.',
  'Komuniciramo direktno, bez gubljenja vremena na vise slojeva izmedju klijenta i ljudi koji grade proizvod.',
  'Volimo projekte gde treba razumeti i biznis problem, ne samo napisati kod.',
]

export const teamMembers: TeamMember[] = [
  {
    role: 'Programer 01',
    focus: '.NET i Azure',
    bio: 'Fokus na backend arhitekturi, cloud okruzenju i sistemima koji moraju da budu pouzdani pod opterecenjem.',
  },
  {
    role: 'Programer 02',
    focus: 'Frontend i full-stack isporuka',
    bio: 'Fokus na korisnickom iskustvu, interfejsima i povezivanju frontend i backend sloja u celinu koja ima smisla.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Upoznajemo proizvod',
    description:
      'Prvo razumemo ciljeve, korisnike i ogranicenja kako bismo predlozili pravi tehnicki pravac.',
  },
  {
    title: 'Definisemo plan',
    description:
      'Dogovaramo prioritete, opseg i ritam rada tako da klijent u svakom trenutku zna sta se radi.',
  },
  {
    title: 'Isporucujemo iterativno',
    description:
      'Radimo u kratkim ciklusima, pokazujemo napredak rano i brzo prilagodjavamo smer kada je potrebno.',
  },
]

export const trustPoints = [
  'Mali tim, velika odgovornost.',
  'Direktna saradnja sa developerima.',
  'Spoj tehnickog kvaliteta i poslovnog razumevanja.',
]

export const contactCards: ContactCard[] = [
  {
    title: 'Za nove projekte',
    text: 'Ako planirate novu aplikaciju, MVP ili modernizaciju postojeceg sistema, ovo je pravo mesto za prvi razgovor.',
  },
  {
    title: 'Za postojece proizvode',
    text: 'Ako vec imate proizvod, mozemo usko uskočiti na backend, Azure ili frontend deo i ubrzati isporuku.',
  },
]
