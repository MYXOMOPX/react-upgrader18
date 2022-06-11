import { ExampleBlock } from "../../components/example-block/ExampleBlock"
import { HalfGrid } from "../../components/half-grid/HalfGrid"
import { HeaderNav } from "../../components/header-nav/HeaderNav"
import { SuspenseUsageLazy } from "./SuspenseUsageLazy";
import "./SuspensePage.css";
import { SuspenseUsageDataFetch } from "./SuspenseUsageDataFetch";
import { Code } from "../../components/code/Code";
import sample from "./code-sample";


const SuspensePage = () => {

    return (
      <HeaderNav
        title="Suspense"
        routeDeccriptors={[
          {
            label: "Lazy",
            path: "",
            element: (
              <HalfGrid>
                <Code text={sample.lazy} language="jsx" highlight="1-2, 8,9,10, 15-20"/>
                <ExampleBlock>
                  <SuspenseUsageLazy/>
                </ExampleBlock>
              </HalfGrid>
            )
          },
          {
            label: "Hook",
            path: "fetchingHard",
            element: (
              <HalfGrid>
                <Code text={sample.withHook} language="jsx"/>
                <ExampleBlock>
                  <SuspenseUsageDataFetch/>
                </ExampleBlock>
              </HalfGrid>
            )
          }
        ]}
      />
    )
}

export default SuspensePage;