export let Cabinet = {
    nom: "cabinet"
    
}
export let Pharmacie = {
    nom: "pharmacie",
    
    APayer: function (medicament) {
        
        if(medicament == "ctrl+maj+f"){
            return 60;
            
        } else if (medicament == "saveOnFocusChange"){
            return 100
        

         }else if (medicament == "CheckLinkRelation"){
            return 35
            

        }else if (medicament == "ventoline"){
            return 40
        }else if (medicament == "f12+doc"){
            return 20;
        } 
    },

    ADonner: function (patient){
        
        console.log("Je donne " + patient.poche);
        if (patient.poche == "ctrl+maj+f"){
            console.log("medicament");
            return "ctrl+maj+f";
        }

    }
}
