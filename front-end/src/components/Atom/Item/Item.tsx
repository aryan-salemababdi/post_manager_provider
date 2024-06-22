import { FC } from "react";
import { EditIcon } from "../../../icons/EditIcon";
import { DeleteIcon } from "../../../icons/DeleteIcon";


const Item: FC<Post> = ({ id, title, content }) => {

    const onClickDelete = (post: Post) => {
        console.log("onclicked", post);
    }
    const onClickEdit = (id: string) => {
        console.log("onclicked", id);
    }

    console.log(title);
    

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl duration-75 hover:scale-105">
                <div className="card-body">
                    <div className="card-title flex justify-between">
                        <h2>{title}</h2>
                        <div className="flex items-center gap-2">
                            <button className="btn btn-circle btn-outline btn-sm"
                                onClick={() => onClickEdit}
                            >
                                <EditIcon />
                            </button>
                            <button className="btn btn-circle btn-outline btn-sm"
                                onClick={() => onClickDelete}
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