import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Hero } from "./home/hero/hero";
import { Services } from "./home/services/services";
import { DigitalCollections } from "./home/digital-collections/digital-collections";
import { LatestAdditions } from "./home/latest-additions/latest-additions";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, DigitalCollections, LatestAdditions, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ui-task');
}
