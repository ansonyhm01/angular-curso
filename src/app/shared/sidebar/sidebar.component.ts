import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gitsService: GifsService) {}

  ngOnInit(): void {}
  get terminos() {
    return this.gitsService.historial;
  }
  buscar(termino: string) {
    this.gitsService.buscarGifs(termino);
  }
}
