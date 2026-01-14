import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonIcon, IonRow, IonGrid, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonRow, IonGrid, IonCardSubtitle]
})
export class ProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
