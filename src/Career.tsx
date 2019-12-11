import * as ReactDOM from "react-dom";
import * as React from "react";
import * as ReactMD from "react-markdown";
import { HTTPService } from "./utils/HTTPService";

import "./Career.scss";

export class Career extends React.Component
{
    private content: string = null;

    public componentWillMount(): void
    {
        this.getContent();
    }

    public render(): JSX.Element
    {
        return (
            <div className="career-container">
                {this.content === null
                    ? `불러오는중...`
                    : <ReactMD source={this.content} />}
            </div>
        )
    }

    private async getContent(): Promise<void>
    {
        try
        {
            this.content = await HTTPService.get<string>("assets/docs/resume_20190227.md");
            console.log(this.content);
            this.setState({});
        }
        catch (err)
        {
            console.log(err);
            this.content = "죄송합니다, 컨텐츠를 불러오는데 실패했습니다.";            
        }
    }
}

export namespace Career
{
    export function main(): void
    {
        ReactDOM.render(<Career />, document.getElementById("root"));
    }
}

window.onload = Career.main;
