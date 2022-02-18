import {Example_6} from 'examples/example_4_5_6/Example_6';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';
import {Example_4} from 'examples/example_4_5_6/Example_4';
import {Example_5} from 'examples/example_4_5_6/Example_5';
import {Fragment} from 'react';

export const App = () => {
  return (
    <Fragment>
      {/*<Example_1 />*/}
      {/*<Example_2 />*/}
      {/*<Example_3 />*/}
      <Example_4 />
      <hr />
      <Example_5 />
      <hr />
      <Example_6>
        <SlowComponent />
      </Example_6>
      {/*</Example_7>*/}
    </Fragment>
  );
};
