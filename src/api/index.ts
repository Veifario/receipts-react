import { instance } from "./instance";
import {} from "../types";

const api = {
	searchRecipes(name: string) {
		return instance.get(`/recipes?name_like=${name}`);
	},
};

export default api;
