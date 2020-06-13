// React: Pass an Array as Props
// use Array methods such as join() can be used when accessing the property.
// for eg
{/* <ParentComponent>
    <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent> */}

const List= (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* change code above this line */ }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                { /* change code below this line */ }
                <List tasks={ ["walk dog", "workout"]}/>
                <h2>Tomorrow</h2>
                <List tasks={ ["walk dog", "workout", "sleep"]}/>
                { /* change code above this line */ }
            </div>
        );
    }
};

ReactDOM.render(<ToDo />, document.getElementById('challenge-node'));