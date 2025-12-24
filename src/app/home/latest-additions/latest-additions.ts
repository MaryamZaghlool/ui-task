import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-additions',
  imports: [],
  templateUrl: './latest-additions.html',
  styleUrl: './latest-additions.css',
})
export class LatestAdditions {
  latestAdditions: { image: string, title: string, tag1: string, tag2: string }[] = [{
    image: "images/addition1.png",
    title: "السيرة النبوية",
    tag1: "مخطوط",
    tag2: "مكتبة عارف حكمة"
  },
  {
    image: "images/addition2.jpg",
    title: "ذيل السيرة النبوية",
    tag1: "كتاب نادر",
    tag2: "مكتبة مدرسة الساقزلي"
  },
  {
    image: "images/addition3.jpg",
    title:  "السيرة النبوية لابن هشام (الجزء الثاني)",
    tag1: "كتاب نادر",
    tag2: "مكتبة مجمع الملك عبدالعزيز"
  }]
}
