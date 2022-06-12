import { HalfGrid } from '../../components/half-grid/HalfGrid';
import samples from "./code-samples";
import { ExampleBlock } from '../../components/example-block/ExampleBlock';
import { Code } from '../../components/code/Code';
import { HeaderNav } from "../../components/header-nav/HeaderNav";
import { TransitionExTrouble } from './TransitionExTrouble';
import "./TransitionPage.css"
import { TransitionExSolution } from './TransitionExSolution';


function TransitionPage() {
  return (
    <HeaderNav
      title="Transactions"
      routeDeccriptors={[
        {
          label: "Trouble",
          path: "",
          element: (
            <HalfGrid>
              <Code text={samples.trouble} language='jsx' highlight={"11-16, 29"}/>
              <ExampleBlock>
                <TransitionExTrouble/>
              </ExampleBlock>
            </HalfGrid>
          )
        },
        {
          label: "Using transitions",
          path: "withTransitions",
          element: (
            <HalfGrid>
              <Code text={samples.withTransitions} language='jsx' highlight={"11-16, 29"}/>
              <ExampleBlock>
                <TransitionExSolution/>
              </ExampleBlock>
            </HalfGrid>
          )
        }
      ]}
    />
  );
}

export default TransitionPage;
