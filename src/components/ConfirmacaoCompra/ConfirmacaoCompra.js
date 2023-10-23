import './ConfirmacaoCompra.scss'


function ConfirmacaoCompra({isOpen, onClose, children}) {
    return  (

        <div>
            {isOpen ? (
                <div className='overlay'>
                    <div className="overlay_background" onClick={onClose}></div>
                    <div className="overlay_container">
                        <div className="overlay_controls"></div>
                        <button className="overlay_close" type="button"> onClick={onClose}</button>
                    </div>
                    {children}
                    {/* Content of the overlay */}
                </div>
            ) : null}

        </div>
    )

}

export default ConfirmacaoCompra;