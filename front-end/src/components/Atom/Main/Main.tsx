import { FC } from "react";
import Header from "../layout/Header";
import Inputs from "../Inputs/Inputs";
import List from "../List/List";


const Main: FC = () => {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6">
                    <Header />
                    <div className="divider block">
                        <Inputs />
                        <List />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main;