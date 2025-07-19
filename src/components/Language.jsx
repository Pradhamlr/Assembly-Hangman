export default function Language(props) {
    const styles = {
        color: props.color,
        backgroundColor: props.background
    }

    return (
        <span style={styles} className={props.className} >{props.name}</span>
    )
}