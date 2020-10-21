class Loop extends React.Component
{
    render()
    {
        const {habits} = this.props;
       return(
            <div>
                <ul>
                    {habits.map(h => <li>{h}</li>)}
                </ul>
            </div>
        );
    }
}