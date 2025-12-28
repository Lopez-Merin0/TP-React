const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirm-overlay">
            <div className="confirm-dialog">
                <p className="confirm-message">{message}</p>
                <div className="confirm-actions">
                    <button onClick={onConfirm} className="confirm-btn confirm-yes">
                        Sí, eliminar
                    </button>
                    <button onClick={onCancel} className="confirm-btn confirm-no">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
