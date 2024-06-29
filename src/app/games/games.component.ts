import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-games',
	standalone: true,
	imports: [],
	template: `
		<h3>Los juegos favoritos de: {{ username }}</h3>
		<ul>
			@for (game of games; track game.id) {
			<li (click)="fav(game.name)">{{ game.name }}</li>
			}
		</ul>
	`,
	styles: ``,
})
export class GamesComponent {
	@Input() username = '';
	@Output() addFavoriteEvent = new EventEmitter<string>();

	fav(gameName: string) {
		this.addFavoriteEvent.emit(gameName);
	}

	games = [
		{
			id: 1,
			name: 'Dota 2',
		},
		{
			id: 2,
			name: 'Call Of Duty ModernWarfare',
		},
		{
			id: 3,
			name: 'Horizon Zero Dawn',
		},
	];
}
