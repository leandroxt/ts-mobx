import { action, observable } from 'mobx';
import { ISuggestion } from '../types';

import Service from '../service';

class Store {
    @observable suggestions: ISuggestion[];

    constructor() {
        this.suggestions = [];
    }

    @action.bound async fetchSuggestions(suggestionText: string) {
        this.suggestions = await Service.fetchSuggestions(suggestionText);
    }
}

export default new Store();
