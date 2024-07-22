import React from "react";

interface ConfirmationDialogProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  show,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">حذف</h5>
            <button type="button" className="close me-auto" onClick={onCancel}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>آیا رکورد حذف شود؟</p>
          </div>
          <div className="modal-footer d-inline">
            <button className="btn btn-primary" onClick={onConfirm}>
              بله
            </button>
            <button className="btn btn-secondary" onClick={onCancel}>
              خیر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
