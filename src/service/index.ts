import { ISuggestion } from '../types';
import data from './municipios.json';

function transformData(): ISuggestion[] {
    return data.map(municipio => ({
        id: municipio.codigo_ibge.toString(),
        text: municipio.nome
    }))
}

function fetchSuggestions(suggestionText: string): Promise<ISuggestion[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!suggestionText) {
                resolve([]);
                return;
            }

            const result = transformData().filter(suggestion => suggestion.text.toUpperCase().startsWith(suggestionText.toUpperCase()));
            resolve(result);
        }, 0);
    });
}

export default {
    fetchSuggestions
};
