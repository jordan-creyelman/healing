export class Doctor{
    constructor(nom,agenda) {
        this.nom = nom;
        this.agenda = agenda;
        this.diagnostique = (maladie) => {
            console.log("Vous avez "+ maladie);
             if(maladie == "mal indenté"){
                return "ctrl+maj+f"
             }else if (maladie == "unsave"){
                return "saveOnFocusChange";

             }else if (maladie == "404"){
                return "CheckLinkRelation";

            }else if (maladie == "azmatique"){
                return "Ventoline";
            }else if (maladie == "syntaxError"){
                return "f12+doc";
            }
       }
    }
}