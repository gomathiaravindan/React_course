class App extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Welcome to this wonderful game!!</h1>
                <h2><Test
                alpha_1 = "a"
                alpha_2 = "b"
                alpha_3 = "c"/></h2>

                <h2><Test
                alpha_1 = "a"
                alpha_2 = "a"
                alpha_3 = "a"/></h2>

                <h2><Test
                alpha_1 = "n"
                alpha_2 = "m"
                alpha_3 = "r"/></h2>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('hello'));