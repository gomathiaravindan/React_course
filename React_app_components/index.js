class App extends React.Component{
    render()
    {
        return(
            <div>
               <Intro />
               <About />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));