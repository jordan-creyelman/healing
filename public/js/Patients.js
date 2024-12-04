export class Patients{
    constructor(nom,maladie,argent,poche,état) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.état = état;
        this.seDeplacer = (lieu) => {
           console.log(this.nom +" je me déplace à "+ lieu);
        }

        this.payer = (pharmacie,payer) => {

            if(this.argent -  payer   >= 0){
                this.argent -= payer
                return pharmacie.ADonner(this)
            }
            else{
                return this.poche = "vide"
                
            }
        }
        this.prendre = () => {
            console.log("prendre " + this.poche);
        }
       this.seSoigner = () => {
        if (this.poche != "vide") {
            console.log("Vous êtes soigner.")
            this.etat = "soigné"
            
        }else {
            console.log("Vous etes mort.");
            this.etat = "mort"
            this.seDeplacer("cimetiere");
        }
       }
           
    }
}