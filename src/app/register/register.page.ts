import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  fullName: string = '';
  username: string = '';

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Lógica para procesar el registro
    console.log('Registro exitoso:', {
      email: this.email,
      fullName: this.fullName,
      username: this.username,
    });
  }

}
