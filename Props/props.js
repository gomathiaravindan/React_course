class Props extends React.Component
{
    render()
    {
        return(
            <div>
            <h2>Hi {this.props.to} from {this.props.from}</h2>
            <img src = {this.props.img}/>
            </div>
        );
    }
}