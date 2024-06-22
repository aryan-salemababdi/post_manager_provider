import { ChangeEvent } from "react";

const Header = () => {

    const onCheangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        console.log(value);
    };

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <p>Posts (2)</p>
                </div>
                <div className="flex-none gap=2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="search ..."
                            className="input input-bordered w-45 max-w-xs"
                            onChange={onCheangeSearch}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;