/* @flow */
/* eslint-disable import/no-unresolved */
import * as React from 'react';

function Counter(props: { initial: number }): React.Node {
    const { initial } = props;
    const [clicks, setClick] = React.useState(initial);
    return (
        <button type="button" onClick={() => setClick(clicks + 1)}>
            Clicked {clicks}
        </button>
    );
}

export { Counter };
