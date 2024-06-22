import { ChangeEvent, useContext } from "react";
import { PostContext } from "../../../context/post";

const Header = () => {

    const { setSearch, postState } = useContext(PostContext)!;

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    };

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <p className=" text-2xl">Posts({postState.posts?.length})</p>
                </div>
                <div className="flex-none gap=2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="search ..."
                            className="input input-bordered w-45 max-w-xs"
                            onChange={onChangeSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;