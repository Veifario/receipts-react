export interface IRecipe {
	id: string;
	name: string;
	imgSrc: string;
	preptime: number;
	cooktime: number;
	calories: number;
	fat: number;
	satfat: number;
	carbs: number;
	fiber: number;
	sugar: number;
	protein: number;
	instructions: string;
	ingredients: Array<string>;
	tags: Array<string>;
}

export interface IRecipe2 {
	id: string;
	name: string;
	imgSrc: string;
	preptime: number;
	cooktime: number;
	calories: number;
	fat: number;
	satfat: number;
	carbs: number;
	fiber: number;
	sugar: number;
	protein: number;
	instructions: string;
	ingredients: string;
	tags: Array<string>;
}
