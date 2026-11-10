import { useEffect, useMemo, useState } from "react";
import { debounce } from "../utils/debounce";
export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

const size_limit = 10;

function useRecipes() {
  const [data, setData] = useState<RecipeResponse | null>(null);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<{
    key: keyof Recipe | null;
    direction: "asc" | "desc" | "none";
  }>({
    key: null,
    direction: "none",
  });

  useEffect(() => {
    fetch(
      "https://dummyjson.com/recipes/search" +
        `?limit=${size_limit}&q=${search}&skip=${page * size_limit}${sort.key ? `&sortBy=${sort.key}` : ""}${sort.direction != "none" ? `&order=${sort.direction}` : ""}`,
    )
      .then((res) => res.json())
      .then((recipes) => setData(recipes));
  }, [search, page, sort]);

  const totalPages = useMemo(
    () => (data?.total ? Math.ceil(data?.total / size_limit) : 0),
    [data],
  );

  const debounceSearch = useMemo(
    () =>
      debounce((val: string) => {
        setSort({
          key: null,
          direction: "none",
        });
        setPage(0); // ✅ batch updated together before useEffect fires
        setSearch(val);
      }, 500),
    [],
  );

  function handleSort(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;

    setPage(0);
    if (target?.dataset?.id) {
      setSort((prev) => {
        if (prev.key === target.dataset.id) {
          return {
            ...prev,
            direction: prev.direction === "asc" ? "desc" : "asc",
          };
        }
        return {
          key: target.dataset.id! as keyof Recipe,
          direction: "asc",
        };
      });
    }
  }
  return {
    data,
    search,
    totalPages,
    page,
    sort,

    debounceSearch,
    setPage,
    handleSort,
  };
}

export default useRecipes;
