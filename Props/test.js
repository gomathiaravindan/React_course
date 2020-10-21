class Test extends React.Component
{
    render()
    {
        const {alpha_1,alpha_2,alpha_3} = this.props;
        const win = (alpha_1 === alpha_2) && (alpha_2===alpha_3);
        return (
            <div>
                <h3>{alpha_1} {alpha_2} {alpha_3}</h3>
                <h2>{win ? <h2>You Win!!<img src="win.gif" width="400" height = "400"/></h2> : <h2>You Lose!!<img src = "lose.gif"/></h2>}</h2>
            </div>
        );
    }
}