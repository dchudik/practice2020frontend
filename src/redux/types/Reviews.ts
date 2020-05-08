export const ADD_NEW_REVIEWS = "ADD_NEW_REVIEWS";
// interface for user in review
interface User{
    name:string;
    login:string;
}
// interface for review
export interface Review{
    id?: string;
    user:User;
    text:string;
    datetime: string;
} 
// create action type
export interface AddNewReviews{
    type: typeof ADD_NEW_REVIEWS;
    payload: Review[]
}
// create user type for work with action review
export type ReviewsActions = AddNewReviews;