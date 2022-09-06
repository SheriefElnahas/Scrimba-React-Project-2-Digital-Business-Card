function Section(props) {
    return (
        <div style={{paddingBottom: '15px'}}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
        </div>
    )
}

export default Section;