export const initialFavoritesState = {
    favorites: [],
  };
  
  export function favoriteReducer(state, action) {
    switch (action.type) {
      case 'hydrate_favorites':
        return {
          ...state,
          favorites: action.payload || [],
        };
      case 'toggle_favorite':
        const exists = state.favorites.includes(action.id);
        return {
          ...state,
          favorites: exists
            ? state.favorites.filter((id) => id !== action.id)
            : [...state.favorites, action.id],
        };
      case 'reset_favorites':
        return initialFavoritesState;
      default:
        return state;
    }
  }
  