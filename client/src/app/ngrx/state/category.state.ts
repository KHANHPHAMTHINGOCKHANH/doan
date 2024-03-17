import { Category } from "../../models/category.model";

export interface categoryState { 
    categories: Category[];
    isGetting: boolean;
    isGetSuccess: boolean;
    getErrorMessage: string;
}