import "./styles/styles.css"
  
function MenuItem({ 
    page, 
    menuIsOpen, 
    transitionDelay 
}) {
    return (
        <div
            className={`menu-item ${menuIsOpen ? 'menu-item-on': ''}`}
            style={{
              transition: `transform 500ms ease;`,
              transitionDelay: `${menuIsOpen ? transitionDelay : 0}ms`
            }}
        >
            <span style={{
                transform: `rotate(deg)`
            }}>{page}</span>
        </div>
    );
}

export default MenuItem;