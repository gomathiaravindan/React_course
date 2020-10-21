class Hello extends React.Component{
    render()
    {
        return(
            <div>
                <Props to = "Rathesh" from = "Gomathi"
                    img = "lose.gif"/>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>,document.getElementById('hello'));