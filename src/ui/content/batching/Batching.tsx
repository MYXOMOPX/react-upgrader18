import React from 'react';
import BatchingNew from "./BatchingNew";
import {VersionSwitch} from "../../components/version-switch/VersionSwitch";
import { CodeExampleBlock } from '../../components/code-example-block/CodeExampleBlock';
import samples from "./code-samples";
import { ExampleBlock } from '../../components/example-block/ExampleBlock';
import { Code } from '../../components/code/Code';
import { Text } from "../../components/Text/Text"


function Batching() {
  return (
    <VersionSwitch>
      <CodeExampleBlock>
        <Code text={samples.old} language='tsx' highlight={"2"}/>
        <ExampleBlock>
          
        <Text size='small'>Amma small</Text>
        <Text size='medium'>Amma medium</Text>
        <Text size='large'>Amma large</Text>
        </ExampleBlock>
      </CodeExampleBlock>

      <div>
        Example
      </div>
    </VersionSwitch>
  );
}

export default Batching;
