import "./styles/styles.css"
  
function MenuItem({ 
    page, 
    menuIsOpen, 
    transitionDelay 
}) {
    return (
        <div
            className={`${menuIsOpen ? 'menu-item menu-item-on': ''}`}
            style={{
              transition: `opacity 500ms ease;`,
              transitionDelay: `${menuIsOpen ? transitionDelay : 0}ms`
            }}
        >
            <span style={{
              transition: `opacity 500ms ease;`,
              transitionDelay: `${menuIsOpen ? transitionDelay : 0}ms`
            }}>{page}</span>
        </div>
    );
}

export default MenuItem;