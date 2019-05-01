class Furry {
	public x: number = 0;
	public y: number = 0;
	private direction: string = 'right';
	public speed: number = 250;

	public get isFurryOutOfMap(): boolean {
		return this.x < 0 || this.x > 9 || this.y < 0 || this.y > 9;
	}

	public updateFurryDirection(which: number): void {
		switch (which) {
			case 37:
				this.direction = 'left';
				break;
			case 38:
				this.direction = 'down';
				break;
			case 39:
				this.direction = 'right';
				break;
			case 40:
				this.direction = 'top';
			default:
				break;
		}
	}

	public updateFurryPosition(): void {
		const { direction, x, y } = this;
		switch (direction) {
			case 'right':
				this.x = x + 1;
				break;
			case 'left':
				this.x = x - 1;
				break;
			case 'top':
				this.y = y + 1;
				break;
			case 'down':
				this.y = y - 1;
				break;
			default:
				break;
		}
	}

	public resetFurry(): void {
		this.x = 0;
		this.y = 0;
		this.direction = 'right';
		this.speed = 250;
	}
}

export default Furry;
