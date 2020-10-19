class First extends React.Component{
    render()
    {
        return <h1>Hello Everyone!!</h1>;

    }
}
class Second extends React.Component{
    render()
    {
        return (
            <div>
        <h1>Welcome to the REACTJs course lectures!!</h1>
        <h1>Let's learn the basics of ReactJs!!</h1>
        <h1>Become a qualified Front-end developer!!</h1>
        </div>
        );
    }
}
function FirstFun()
{
    return <h3>This is the function component!!</h3>;
}

ReactDOM.render(<First />, document.getElementById('hello'));
ReactDOM.render(<Second />, document.getElementById('hello2'));
ReactDOM.render(<FirstFun />, document.getElementById('func'));