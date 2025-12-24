import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-collections',
  imports: [],
  templateUrl: './digital-collections.html',
  styleUrl: './digital-collections.css',
})
export class DigitalCollections {
  digitalCollections: { title: string}[] = [{
    title: "مكتبة عارف حكمة",
  },
  {
    title: "المكتبة المحمودية",
  },
  {
    title: "مكتبة رباط عثمان بن عفان",
  }]
}
