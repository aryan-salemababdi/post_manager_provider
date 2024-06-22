import { FC, useContext, useEffect } from "react";
import Item from "../Item/Item";
import { PostContext } from "../../../context/post";
import { PostActionTypes } from "../../../helper/constant";


const List: FC = () => {

    const { postState, query, dispatch } = useContext(PostContext)!;

    useEffect(()=>{
        dispatch({
            type: PostActionTypes.SET_POST,
            payload: query.data as Post,
        })
    }, [query.data])

    return (
        <>
            <div className="flex flex-col gap-3 mt-5">

                {
                    postState.posts.length > 0 ?
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        postState.posts?.map((item: any) => {
                            return (
                                <Item {...item} key={item.id} />
                            )
                        })
                        :
                        <span className="text-center text-lg font-bold">
                            No Data To Display
                        </span>
                }
            </div>
        </>
    )
}

export default List;