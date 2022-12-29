export default function Button(props) {
    const {children, className, isSelected, buttonId, kind, ...rest} = props;
    let classes;
    if (kind === "answer") {
        classes = isSelected ? `btn ${className} light-purple-btn` : `btn ${className} white-btn`;
    } else {
        classes = `btn ${className}`
    }
    return <button className={classes} {...rest}>{children}</button>
}