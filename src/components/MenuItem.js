import "./styles/styles.css"
  
function MenuItem({ 
    page, 
    menuIsOpen, 
    transitionDelay 
}) {
    return (
        <div className={menuIsOpen ? "menu-item" : "menu-item-closed"}>
            <span style={{
            }}>{page}</span>
        </div>
    );
}

export default MenuItem;