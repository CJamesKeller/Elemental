import * as React from 'react';
import { Component } from 'react';

export interface GreeterProps extends React.Props<Greeter> {
  whomToGreet: string;
  greeting?: string | (() => string);
}

export class Greeter extends Component<GreeterProps, {}> {
  public static value: "thisValue";

  public someMethod() {
    console.log('this method here');
  }

  render() {
    let g = this.props.greeting;

    let greeting = 'Hello';

    if (typeof g === 'string') {
      greeting = g;
    }
    else if (g) {
      greeting = g();
    }

    return (
      <div>
        <h2>{greeting}, {this.props.whomToGreet}</h2>
      </div>
    );
  }
}
