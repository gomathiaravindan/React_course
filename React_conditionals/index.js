function getNum()
{
    return Math.floor(Math.random() * 10)+ 1;
}

class Sum extends React.Component
{
    render()
    {
        const sum = 9;
        const num = getNum();
        return (
            <div>
                <h2>The number is:{num}</h2>
                <p>{num===9 ? 'WIN!!' : 'LOSE!!'}</p>
                {
                num === sum && 
                   <img src="win.gif" width="300" height = "200"/>
                }
                {
                    num != sum &&
                    <img src = "lose.gif"/>
                }
            </div>
        );
    }
   
        
}

ReactDOM.render(<Sum />, document.getElementById('root'));