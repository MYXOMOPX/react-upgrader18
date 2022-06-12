import { Code } from "../../components/code"
import { ExampleBlock } from "../../components/example-block/ExampleBlock"
import { HalfGrid } from "../../components/half-grid/HalfGrid"
import { HeaderNav } from "../../components/header-nav/HeaderNav"
import sample from "./code-sample"
import { DeferredExSimple } from "./DeferredExSimple"



const DefferedPage = () => {

    return (
      <HeaderNav
        title="Deferred"
        routeDeccriptors={[
          {
            label: "Simple",
            path: "",
            element: (
              <HalfGrid>
                <Code text={sample.simple} language="jsx"/>
                <ExampleBlock>
                  <DeferredExSimple/>
                </ExampleBlock>
              </HalfGrid>
            )
          }
        ]}
      />
    )
}

export default DefferedPage;