import { HalfGrid } from '../../components/half-grid/HalfGrid';
import samples from "./code-samples";
import { ExampleBlock } from '../../components/example-block/ExampleBlock';
import { Code } from '../../components/code/Code';
import { BatchingExampleNew } from './BatchingExample';
import { HeaderNav } from "../../components/header-nav/HeaderNav";


function Batching() {
  return (
    <HeaderNav
      title="Batching"
      routeDeccriptors={[
        {
          label: "React 18",
          path: "",
          element: (
            <HalfGrid>
              <Code text={samples.new} language='jsx' highlight={"11-16, 29"}/>
              <ExampleBlock>
                <BatchingExampleNew/>
              </ExampleBlock>
            </HalfGrid>
          )
        },
        {
          label: "Old",
          path: "old",
          element: (
            <HalfGrid>
              <Code text={samples.oldState} language='jsx' highlight={"2, 11-15, 28"}/>
              <Code text={samples.oldReducer} language='jsx' highlight={"2, 11-15, 28"}/>
            </HalfGrid>
          )
        }
      ]}
    />
  );
}

export default Batching;
