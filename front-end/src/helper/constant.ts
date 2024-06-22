export enum PostActionTypes {
    ADD_POST = "ADD_POST",
    EDIT_POST = "EDIT_POST",
    DELETE_POST = "DELETE_POST",
    GET_POSTS = "GET_POSTS",
    SET_POST = "SET_POST",
    SET_POSTS = "SET_POSTS",
}


export const InitialPostState: PostState = {
    posts: [{ id: "", title: "", content: "" }],
    selectedPost: {
        id: "",
        title: "",
        content: ""
    }
};

export enum HttpMethod {
    POST = "post",
    PUT = "put",
    DELETE = "delete",
    GET = "get",
}