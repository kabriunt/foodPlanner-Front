import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService,
              private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  }

  checkLogin(form) {
    console.log(form);
    let username: string;
    username = form.value.username;
    this.authService.login(form.value).subscribe((resp) => {
      if (resp != null) {
        console.log(resp);
        console.log(resp.headers.get('Authorization'));
        localStorage.setItem('token', resp.headers.get('Authorization'));
        this.router.navigateByUrl('home/' + username);
      }
    }, (error) => { console.log(error); }
    );

  }

}
