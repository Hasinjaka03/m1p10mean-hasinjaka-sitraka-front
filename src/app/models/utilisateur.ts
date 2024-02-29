// modele pour utilisateur 

export interface Utilisateur {
  _id: string,
  nom: string,
  prenom: string,
  dateNaissance: Date,
  numeroTelephone: string,
  profil: string,
  email: string,
  motDePasse: string,
  heureDebut:string,
  heureFin:string
  photo:string  | ArrayBuffer | null
}
  