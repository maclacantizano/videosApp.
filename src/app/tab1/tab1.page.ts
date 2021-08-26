import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';
import { DadosService } from '../services/dados.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = "Vídeos App";

  listaVideos: IFilme[] = [
    {
      nome: 'Viúva Negra (2021)',
      lancamento: '08/07/2021',
      duracao: '2h 13m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/viuva-negra'
    },

    {
      nome: 'Mulher Maravilha (2020)',
      lancamento: '17/12/2020',
      duracao: '2h 31m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AweDlIiohqw4sjC7gCsPVd1zo77.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia'],
      pagina: '/mulher-maravilha'
    },

    {
      nome: 'Din e o Dragão genial (2021)',
      lancamento: '15/01/2021',
      duracao: '1h 38m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hNhGNWn4Z9S77cOuYn2ZWfC9E7b.jpg',
      generos: ['Animação', 'Família', 'Comédia', 'Fantasia'],
      pagina: '/din-e-o-dragao-genial'
    },

    {
      nome: 'Hotel Transilvânia (2012)',
      lancamento: '05/10/2012',
      duracao: '1h 31m',
      classificacao: 69,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i9kAWShk7qrqril2dLboP0hi8I2.jpg',
      generos: ['Animação', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/hotel-transilvania'
    },

    {
      nome: 'Crepúsculo Amanhecer 2 (2012)',
      lancamento: '15/11/2012',
      duracao: ' 1h 55m',
      classificacao: 65,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pVNobbWwSM2xpv2rRejxwnHf4xH.jpg',
      generos: ['Aventura', 'Fantasia', 'Drama', 'Romance'],
      pagina: '/crepusculo-amanhecer'
    },


  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }


  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
