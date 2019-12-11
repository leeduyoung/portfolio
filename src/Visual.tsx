import * as React from "react";
import { FaArrowDown } from "react-icons/fa";

import "./Visual.scss";

export class Visual extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <div className="top-area-container">
                <div className="inner">
                    <p className="slide-text">
                        <span>F</span>
                        <span>a</span>
                        <span>l</span>
                        <span>l</span>
                        <span>&nbsp;</span>
                        <span>i</span>
                        <span>n</span>
                        <span>&nbsp;</span>
                        <span>I</span>
                        <span>T</span>
                    </p>
                    <div className="scroll" onClick={this.moveToIntro.bind(this)}>
                        <span className="text">
                            SCROLL DOWN
                        </span>
                        <div className="icon">
                            <FaArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private moveToIntro(): void
    {
        window.scroll({top: window.innerHeight, left: 0, behavior: 'smooth' });
    }
}