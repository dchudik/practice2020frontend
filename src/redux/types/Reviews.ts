export const ADD_NEW_REVIEWS = "ADD_NEW_REVIEWS";

interface User{
    name:string;
    login:string;
}

export interface Review{
    id?: string;
    user:User;
    text:string;
    datetime: string;
} 

export interface AddNewReviews{
    type: typeof ADD_NEW_REVIEWS;
    payload: Review[]
}

export type ReviewsActions = AddNewReviews;