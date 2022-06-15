import { ExampleBlock } from "../../components/example-block/ExampleBlock"
import { HalfGrid } from "../../components/half-grid/HalfGrid"
import { HeaderNav } from "../../components/header-nav/HeaderNav"
import { SuspenseUsageLazy } from "./SuspenseUsageLazy";
import "./SuspensePage.css";
import { SuspenseUsageHookQuery } from "./SuspenseUsageHookQuery";
import { Code } from "../../components/code/Code";
import sample from "./code-sample";
import { SuspenseUsageDataFetch } from "./SuspenseUsageSimpleFetch";
import { SuspenseUsageContext } from "./SuspenseUsageContext";


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
                <Code text={sample.lazy} language="jsx" highlight="1-4, 10-12, 17-22"/>
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
                <Code text={sample.dataFetch} language="jsx" highlight="7-9, 15-28"/>
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
                <Code text={sample.withHookQuery} language="jsx" highlight="1, 3-7, 14-17, 22-34"/>
                <ExampleBlock>
                  <SuspenseUsageHookQuery/>
                </ExampleBlock>
                <Code text={sample.useSuspenseQuery} language="typescript"/>
                <Code text={sample.suspenseOverFunction} language="typescript"/>
              </HalfGrid>
            )
          },
          {
            label: "Hook with context",
            path: "withContext",
            element: (
              <HalfGrid>
                <Code text={""} language="jsx"/>
                <ExampleBlock>
                  <SuspenseUsageContext/>
                </ExampleBlock>
              </HalfGrid>
            )
          }
        ]}
      />
    )
}

export default SuspensePage;