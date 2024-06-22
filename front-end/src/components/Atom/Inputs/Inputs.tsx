import { ChangeEvent, useState } from "react";

const Inputs = () => {

    const DEFAULT_INPUT_VALUE = {
        title: "",
        content: "",
    }

    const [input, setInput] =
        useState<Record<"title" | "content", string>>(DEFAULT_INPUT_VALUE);

    const onCheangeInput = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value });
    };

    const onSubmitClicked = (): void => {

        console.log("submit");

    };

    return (
        <div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold"> Title </span>
                </div>
                <textarea
                    value={input.title}
                    name="title"
                    rows={5}
                    placeholder="Post title"
                    className="input input-bordered w-full input-sm"
                    onChange={onCheangeInput}
                ></textarea>
                {/* {"Create Post"} */}
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold"> Content </span>
                </div>
                <textarea
                    value={input.content}
                    name="content"
                    rows={5}
                    placeholder="Post title"
                    className="input input-bordered w-full input-sm"
                    onChange={onCheangeInput}
                ></textarea>
            </label>
            <button
                className="btn btn-primary w-full btn-sm mt-4"
                onClick={onSubmitClicked}
            >
                {"Create Post"}
            </button>
        </div>
    )
}

export default Inputs;