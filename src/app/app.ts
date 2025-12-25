import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Hero } from "./home/hero/hero";
import { Services } from "./home/services/services";
import { DigitalCollections } from "./home/digital-collections/digital-collections";
import { LatestAdditions } from "./home/latest-additions/latest-additions";
import { Footer } from "./layout/footer/footer";
import { CardsSectionComponent } from "./pages/shared/cards-section/cards-section";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, Footer, CardsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ui-task');

  latestAdditions: { image: string, title: string, tags: string[] }[] = [{
    image: "images/addition1.png",
    title: "السيرة النبوية",
    tags: ["مخطوط", "مكتبة عارف حكمة"]
  },
  {
    image: "images/addition2.jpg",
    title: "ذيل السيرة النبوية",
    tags: ["كتاب نادر", "مكتبة مدرسة الساقزلي"]
  },
  {
    image: "images/addition3.jpg",
    title: "السيرة النبوية لابن هشام (الجزء الثاني)",
    tags: ["كتاب نادر", "مكتبة مجمع الملك عبدالعزيز"]
  }]

  digitalCollections: { title: string, image: string, description: string }[] = [{
    title: "مكتبة عارف حكمة",
    image: "images/digital-collections.jpg",
    description: "نبذة"
  },
  {
    title: "المكتبة المحمودية",
    image: "images/digital-collections.jpg",
    description: "نبذة"
  },
  {
    title: "مكتبة رباط عثمان بن عفان",
    image: "images/digital-collections.jpg",
    description: "نبذة"
  }]
}
