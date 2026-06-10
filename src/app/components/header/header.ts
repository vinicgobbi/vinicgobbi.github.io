import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  public imprimirCV(): void {
    const oldTitle = document.title;
    
    document.title = 'cv-vinicius-cavati-gobbi';

    window.print();

    document.title = oldTitle;
  }
}
