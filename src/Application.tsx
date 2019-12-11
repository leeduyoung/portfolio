import * as React from "react";
import * as ReactDOM from "react-dom"
import { ReactUtil } from "./utils/ReactUtil";
import { Visual } from "./Visual"; 
import { Contents } from "./Contents";
import { Footer } from "./Footer";

import "./Application.scss";

export class Application extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <div className="app-container">
                <Visual />
                <Contents />
                <Footer />
            </div>        
        )
    }
}

export namespace Application
{
    export function main(): void
    {
        // SET USER-AGENT
        let doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);

        // INIT RENDER
        ReactDOM.render(<Application />, document.getElementById("root"));
    }
}

if (ReactUtil.isBrowser())
    window.onload = Application.main;