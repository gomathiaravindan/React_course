class App extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>My Habits</h1>
                <Loop 
               habits= {['Working with laptop','Whatsup','Eating and Sleeping']}
               />
                
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));