import { instance } from "./instance";
import { IRecipe } from "../types";

const api = {
	async getRecipes() {
		const res = await instance.get("/recipes");
		return res.data;
	},
	async getRecipe(id: string) {
		const res = await instance.get(`/recipes/${id}`);
		return res.data;
	},
	async addRecipe(data: IRecipe) {
		const res = await instance.post("/recipes", data);
		return res.data;
	},
	async deleteRecipe(id: string) {
		const res = await instance.delete(`/recipes/${id}`);
		return res.data;
	},
	async putRecipe(id: string, data: any) {
		const res = await instance.put(`/recipes/${id}`, data);
		return res.data;
	},
	async searchRecipes(name: string) {
		const res = await instance.get(`/recipes?name_like=${name}`);
		return res.data;
	},
};

export default api;
