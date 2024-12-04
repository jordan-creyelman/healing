import { Patients } from "./Patients.js";
import { Doctor } from "./Doctor.js";
import {Cabinet, Pharmacie} from './Lieu.js';
import { Chat } from "./Chat.js";

let chat = new Chat();

// Création Patients

let marcus = new Patients("marcus", "mal indenté", 100, "vide", "malade");
let optimus = new Patients("optimus", "unsave", 200, "vide", "malade");
let sangoku = new Patients("sangoku","404",80,"vide","malade");
let darthvader = new Patients("darthvader","azmatique",110,"vide","malade");
let semicolon = new Patients("semicolo","syntaxError",60,"vide","malade")

// Création Doctor
let doctor = new Doctor("jean", []);


doctor.agenda.push(marcus);
doctor.agenda.push(optimus);
doctor.agenda.push(sangoku);
doctor.agenda.push(darthvader);
doctor.agenda.push(semicolon);




for (let i = 0;i < doctor.agenda.length;i++){
    
    doctor.agenda[i].seDeplacer("Hopital");
    doctor.agenda[i].poche = doctor.diagnostique(doctor.agenda[i].maladie);
    doctor.agenda[i].seDeplacer("Pharmacie");
    doctor.agenda[i].poche=doctor.agenda[i].payer(Pharmacie,Pharmacie.APayer(doctor.agenda[i].poche));
    doctor.agenda[i].seSoigner()
    
    
}



