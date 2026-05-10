function card(props) {
    return (
        <div className="ch">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfHwwfHwwfHxx&auto=format&fit=crop&w=500&q=60" alt="Card Image" />
            <h1>{props.user} </h1>
            <p>Lorem 1:43
                 ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sed doloremque quas fuga quod magni.</p>
            <button>Read More</button>
        </div>
    )
}
export default card