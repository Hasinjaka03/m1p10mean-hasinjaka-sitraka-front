import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/service/login-admin.service';


@Component({
  selector: 'app-login-employee',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  errorMessage : string = '' ;

  constructor(private authservice : LoginService, private router : Router) { }

  ngOnInit(): void {

  }

  login(): void {
    this.errorMessage = '' ;
    this.authservice.login(this.email,this.password).subscribe(
      (utilisateu) => {
        localStorage.setItem(utilisateu.profil,JSON.stringify(utilisateu)) ;
        if(utilisateu.profil === 'employe'){
          this.router.navigate(['/employee/liste_rd']) ;
        }
        else if(utilisateu.profil === 'manager'){
          this.router.navigate(['/manager/service']) ;
        }
      },
      (error) => {
        this.errorMessage = error ;
      }

    );
  }

}
