import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { LoginService } from 'src/app/service/login-admin.service';
import { RendezvousService } from 'src/app/service/rendezvous.service';

@Component({
  selector: 'app-tache-effectue',
  templateUrl: './tache-effectue.component.html',
  styleUrls: ['./tache-effectue.component.css']
})
export class TacheEffectueComponent implements OnInit {
  user!: Utilisateur;
  rendezvous : any[] = [];
  datesearch : string = new Date().toISOString().split('T')[0];
  // total : number = 0 ;
  

  constructor(private user_serv : LoginService , private rendezvous_serv : RendezvousService  ) { }

  ngOnInit(): void {
    this.user = this.user_serv.getCurrentUser('employe');
    // console.log(this.user);
    this.rendezvous_serv.getListRendezVous(this.user._id).subscribe(
      rendezvous => {this.rendezvous = rendezvous ;
        // console.log( this.rendezvous);
        // console.log(this.rendezvous[0].date.toString().split('T')[0]) ;
    }
    );
    // this.liste_tache();
    // console.log(this.datesearch);
  }

  liste_date_selection () : string[] {
      let use :Date ;
      const datenow :Date = new Date();
      const dat : string = new Date().toISOString().split('T')[0];
      const val :string [] = [];
      val.push(dat);
      for(let i=0 ;i< this.rendezvous.length;i++){
          this.rendezvous[i].daty = this.rendezvous[i].date.toString().split('T')[0];
          this.rendezvous[i].revenue =( this.rendezvous[i].service.prix * this.rendezvous[i].service.commission)/100 ;
          use = new Date(this.rendezvous[i].date.toString().split('T')[0]);
          if(use <= datenow){
              val.push(this.rendezvous[i].daty) ;
          }
      }
      return val ;
  }

  liste_tache():any[]{
      const val :any[] =[];
      for(let i=0 ;i< this.rendezvous.length;i++){
        if(this.datesearch === this.rendezvous[i].daty){
            val.push(this.rendezvous[i]) ;
        }
      }
      return val ;
  }

  total_benefice() : any {
    const liste = this.liste_tache() ;
    let somme :number = 0;
    if(liste.length > 0) {
      for(let i=0 ;i< liste.length;i++){
        somme = somme + liste[i].revenue ;
      }
    }
    return somme ;
  }

}
