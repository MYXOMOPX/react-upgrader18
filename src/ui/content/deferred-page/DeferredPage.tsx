import { Code } from "../../components/code"
import { ExampleBlock } from "../../components/example-block/ExampleBlock"
import { HalfGrid } from "../../components/half-grid/HalfGrid"
import { HeaderNav } from "../../components/header-nav/HeaderNav"
import sample from "./code-sample"
import { DeferredExDirect } from "./DeferredExDirect"
import { DeferredExSimple } from "./DeferredExSimple"
import { DeferredExTransition } from "./DeferredExTransition"



const DefferedPage = () => {

    return (
      <HeaderNav
        title="Deferred"
        routeDeccriptors={[
          {
            label: "Direct",
            path: "",
            element: (
              <HalfGrid>
                <Code text={sample.direct} language="jsx"/>
                <ExampleBlock>
                  <DeferredExDirect/>
                </ExampleBlock>
              </HalfGrid>
            )
          },
          {
            label: "Simple",
            path: "simple",
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