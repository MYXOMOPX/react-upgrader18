import { HalfGrid } from '../../components/half-grid/HalfGrid';
import samples from "./code-samples";
import { ExampleBlock } from '../../components/example-block/ExampleBlock';
import { Code } from '../../components/code/Code';
import { HeaderNav } from "../../components/header-nav/HeaderNav";

import "./PerformancePage.css"


function PerformancePage() {
  return (
    <HeaderNav
      title="Transitions"
      routeDeccriptors={[
        {
          label: "Trouble",
          path: "",
          element: (
            <HalfGrid>
              <Code text={samples.trouble} language='jsx'/>
              <ExampleBlock>
                TEST
              </ExampleBlock>
            </HalfGrid>
          )
        }
      ]}
    />
  );
}

export default PerformancePage;
