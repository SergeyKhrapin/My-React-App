// 1.
// What is the difference between a and b ways of passing the initial value to useState function?

import { useEffect } from "react";

function SomeComponent() {
    function setInitialValue() {
        console.log('Some expensive calculation');
        return '';
    }

    // a
    let [value, setStateValue] = useState(setInitialValue());

    // b
    let [value, setStateValue] = useState(() => setInitialValue());
}

// Answer
// a - setInitialValue() function will be executed each time on re-renders
// b - setInitialValue() function will be executed only once on the first render.


// 2.
// What is the difference between passing an object to useState in functional and class components?
// What will be displayed in the console?

function SomeFunctionalComponent() {
    let [state, setState] = useState({
        title: 'Title',
        value: 0
    });

    function changeButtonTitle() {
        setState({title: 'Argon'});
    }

    console.log(state);

    return <button onClick={changeButtonTitle}>{state.title}</button>;
}

class SomeClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Title',
            value: 0
        };
        this.changeButtonTitle = this.changeButtonTitle.bind(this);
    }

    changeButtonTitle() {
        setState({title: 'Argon'});
    }

    render() {
        console.log(this.state);
        return <button onClick={changeButtonTitle}>{this.state.title}</button>;
    }
}

// Answer
// Functional component - console output will be {title: 'Argon'}, i.e. 'value' property is missed
// Class component - console output will be {title: 'Argon', value: 0} because of an object merging.

// How to fix in functional component - use a callback to set a new state

setState(prevState => {
    return {...prevState, ...{title: 'Argon'}};
});

// or

setState(prevState => {
    return Object.assign(prevState, {title: 'Argon'});
});


// 3.
// How to recognize only the first rendering of functional component (equivalent of ComponentDidMount in class components)?
// Answer - to pass an empty array as a second argument to useEffect hook
useEffect(() => {
    console.log('It will be displayed only after first rendering');
}, []);