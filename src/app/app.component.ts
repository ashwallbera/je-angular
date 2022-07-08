import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'je-angular';
  
}

const firebaseConfig = {
  apiKey: "AIzaSyBVdGM3HB8YouOEHypwvLkjM_GWuo8S5pk",
  authDomain: "jadocenterprises.firebaseapp.com",
  databaseURL: "https://jadocenterprises-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jadocenterprises",
  storageBucket: "jadocenterprises.appspot.com",
  messagingSenderId: "1062296600910",
  appId: "1:1062296600910:web:57b3c9d98146755e2e9e1f",
  measurementId: "G-NZ5PRKD92S"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
