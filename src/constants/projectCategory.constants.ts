export const PROJECT_CATEGORIES = {
    FEATURE_FILM: 'feature_film',
    SHORT_FILM: 'short_film',
    DOCUMENTARY: 'documentary',
    VIDEO_GAME: 'video_game',
} as const;

export type ProjectCategoryType = 
typeof PROJECT_CATEGORIES[keyof typeof PROJECT_CATEGORIES];

export const PROJECT_CATEGORY_OPTIONS = [
  { value: PROJECT_CATEGORIES.FEATURE_FILM, label: "Feature Film" },
  { value: PROJECT_CATEGORIES.SHORT_FILM, label: "Short Film" },
  { value: PROJECT_CATEGORIES.DOCUMENTARY, label: "Documentary" },
  { value: PROJECT_CATEGORIES.VIDEO_GAME, label: "Video Game" },
] as const;