import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.page.html',
  styleUrls: ['./photo-preview.page.scss'],
})
export class PhotoPreviewPage implements OnInit {
  photo: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.photo = params['photo'];
    });
  }

  savePhoto() {
    console.log('Foto guardada:', this.photo);
    this.router.navigate(['/tabs/home']); // Redirigir al inicio después de guardar
  }

  discardPhoto() {
    this.router.navigate(['/tabs/home']); // Redirigir al inicio después de descartar
  }
}
