import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Footer, Home, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portal');
}
