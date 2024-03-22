import { Storage } from "../../models/storage.model";

export interface StorageState {
    storage: Storage;
    isCreating: boolean;
    isCreateSuccess: boolean;
    isCreateFailure: string;
    isGetting: boolean;
    isGetSuccess: boolean;
    getErrorMessage: string;
}