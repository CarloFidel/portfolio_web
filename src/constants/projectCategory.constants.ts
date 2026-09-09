export const PROJECT_CATEGORIES = {
    FEATURE_FILM: 'feature_film',
    SHORT_FILM: 'short_film',
    DOCUMENTARY: 'documentary',
    VIDEO_GAME: 'video_game',
} as const;

export type ProjectCategoryType = 
typeof PROJECT_CATEGORIES[keyof typeof PROJECT_CATEGORIES];