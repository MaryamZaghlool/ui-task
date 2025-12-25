import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.html',
  styleUrls: ['./cards-section.css'],
  imports: [CommonModule]
})
export class CardsSectionComponent {
  @Input() title!: string;
  @Input() data: any[] = [];
  @Input() sectionClass = '';
  @Input() showViewAll = true;

  // action config
  @Input() actionType: 'arrow' | 'button' = 'button';
  @Input() actionLabel = '';
}
