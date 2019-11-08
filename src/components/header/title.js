import React from "react"
import Styles from "./title.module.css"

const Title = props => {
    return (
        <div className={Styles.wrapper}>
            <h1 className={Styles.name}>{props.name}</h1>
            <span className={Styles.title}>{props.title}</span>
        </div>
    )
}

Title.defaultProps = {
    name: "James Maclennan",
    title: "Front end web developer",
}

export default Title
