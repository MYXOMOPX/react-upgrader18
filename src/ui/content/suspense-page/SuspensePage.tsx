import { ExampleBlock } from "../../components/example-block/ExampleBlock"
import { HalfGrid } from "../../components/half-grid/HalfGrid"
import { HeaderNav } from "../../components/header-nav/HeaderNav"
import { SuspenseUsageLazy } from "./SuspenseUsageLazy";
import "./SuspensePage.css";
import { SuspenseUsageHookQuery } from "./SuspenseUsageHookQuery";
import { Code } from "../../components/code/Code";
import sample from "./code-sample";
import { SuspenseUsageDataFetch } from "./SuspenseUsageSimpleFetch";


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
                <Code text={sample.lazy} language="jsx" highlight="1-2, 7,8,9,10, 15-20"/>
                <ExampleBlock>
                  <SuspenseUsageLazy/>
                </ExampleBlock>
              </HalfGrid>
            )
          },
          {
            label: "Data fetching",
            path: "fetching",
            element: (
              <HalfGrid>
                <Code text={sample.dataFetch} language="jsx" highlight="8,9,10, 17-27"/>
                <ExampleBlock>
                  <SuspenseUsageDataFetch/>
                </ExampleBlock>
                <Code text={sample.suspenseOverPromise} language="jsx"/>
              </HalfGrid>
            )
          },
          {
            label: "Fetch with hook",
            path: "useSuspenseQuery",
            element: (
              <HalfGrid>
                <Code text={sample.withHookQuery} language="jsx" highlight="3-7, 14-17, 23-30, 1,22"/>
                <ExampleBlock>
                  <SuspenseUsageHookQuery/>
                </ExampleBlock>
                <Code text={sample.useSuspenseQuery} language="typescript"/>
                <Code text={sample.suspenseOverFunction} language="typescript"/>
              </HalfGrid>
            )
          }
        ]}
      />
    )
}

export default SuspensePage;