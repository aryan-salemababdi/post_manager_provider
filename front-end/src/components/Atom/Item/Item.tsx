import { FC, useContext } from "react";
import { EditIcon } from "../../../icons/EditIcon";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { PostContext } from "../../../context/post";
import { HttpMethod, PostActionTypes } from "../../../helper/constant";
import useMutation from "../../../hooks/useMutation";


const Item: FC<Post> = ({ id, title, content }) => {

    const { execute } = useMutation();
    const { dispatch } = useContext(PostContext)!;

    const onClickDelete = (id: string) => {
        execute({ url: `post/${id}`, method: HttpMethod.DELETE });
        dispatch!({ type: PostActionTypes.DELETE_POST, payload: id });
    };

    const onClickEdit = (post: Post) => {
        dispatch!({ type: PostActionTypes.SET_POST, payload: post });
    };

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl duration-75 hover:scale-105">
                <div className="card-body">
                    <div className="card-title flex justify-between">
                        <h2>{title}</h2>
                        <div className="flex items-center gap-2">
                            <button className="btn btn-circle btn-outline btn-sm"
                                onClick={() => onClickEdit({ id, title, content })}
                            >
                                <EditIcon />
                            </button>
                            <button className="btn btn-circle btn-outline btn-sm"
                                onClick={() => onClickDelete(id)}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default Item;