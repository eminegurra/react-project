"use client";
import Image from "next/image";
import { useReducer, useEffect, useState } from "react";
import { servicesData } from "../data";
import {
  favoriteReducer,
  initialFavoritesState,
} from "../reducers/favoriteReducer";

const LOCAL_STORAGE_KEY = "favorite_services";

export default function Services() {
  const [isHydrated, setIsHydrated] = useState(false);

  // Step 1: Initialize reducer
  const [state, dispatch] = useReducer(favoriteReducer, initialFavoritesState);

  // Step 2: Wait for hydration to access localStorage safely
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Step 3: Load favorites from localStorage after hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        dispatch({
          type: "hydrate_favorites",
          payload: JSON.parse(stored),
        });
      }
    }
  }, []);

  // Step 4: Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(state.favorites)
      );
    }
  }, [state.favorites, isHydrated]);

  if (!isHydrated) return null; // Avoid hydration mismatch

  const isFavorite = (id) => state.favorites.includes(id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Our Services</h1>
      <p className="text-gray-600 text-center mt-2">
        Click the heart to save your favorites ❤️
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {servicesData.map((service) => {
          const favorite = isFavorite(service.id);

          return (
            <div
              key={service.id}
              className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
                favorite ? "bg-yellow-100 ring-2 ring-yellow-500" : "bg-gray-100"
              }`}
            >
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>

              <button
                onClick={() => {
                  dispatch({ type: 'toggle_favorite', id: service.id });

                  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
                  const parsed = stored ? JSON.parse(stored) : [];
                  console.log("🧠 Favorite IDs in localStorage:", parsed);
                }}
                className="text-3xl mt-4"
                aria-label="Toggle Favorite"
              >
                {favorite ? "❤️" : "🤍"}
              </button>
            </div>
          );
        })}
      </div>

      {state.favorites.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-lg">Favorites: {state.favorites.length} ❤️</p>
          <button
            onClick={() => dispatch({ type: "reset_favorites" })}
            className="mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Clear Favorites
          </button>
        </div>
      )}
    </div>
  );
}
