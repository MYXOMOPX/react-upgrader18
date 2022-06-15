import { FC } from "react";
import { Code } from "../../components/code";
import { ExampleBlock } from "../../components/example-block/ExampleBlock";
import { HalfGrid } from "../../components/half-grid/HalfGrid";
import { HeaderNav } from "../../components/header-nav/HeaderNav";
import { Text } from "../../components/Text";
import sample from "./code-sample";
import { StrictModeEx } from "./StrictModeEx";



const OtherPage: FC = () => {

    return (
        <HeaderNav 
            title="Other"
            routeDeccriptors={[
                {
                    label: "Render udefined",
                    path: "",
                    element: (
                        <HalfGrid>
                            <Code language="jsx" text={sample.renderUndefined}/>
                            <ExampleBlock>
                                <div>
                                    <Text size="large">Rendering null: {null}</Text>
                                    <Text size="large">Rendering undefined: {undefined}</Text>
                                </div>
                            </ExampleBlock>
                        </HalfGrid>
                    )
                },
                {
                    label: "Strict-mode",
                    path: "strict",
                    element: (
                        <HalfGrid>
                            <Code language="jsx" text={sample.strictMode}/>
                            <ExampleBlock>
                                <StrictModeEx/>
                            </ExampleBlock>
                        </HalfGrid>
                    )
                }
            ]}
        />
    )
}

export default OtherPage;