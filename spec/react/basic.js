/* @flow */
/* eslint-disable import/no-unresolved */
import * as React from 'react';

function BasicComponent(props: { name: string }): React.Node {
    const { name } = props;
    return <div>Hello {name}!</div>;
}

// Multiple components per file should be allowed
function AnotherBasicComponent(props: { name: string }): React.Node {
    return <div>Bonjour {props.name}!</div>;
}

export { BasicComponent, AnotherBasicComponent };
