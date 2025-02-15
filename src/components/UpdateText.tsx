import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  replaceOriginalText: (newOriginalText: string) => void;
}

const UpdateText = ({ replaceOriginalText }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [writtentext, updateWrittenText] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light btn-sm"
        onClick={toggleModal}
      >
        Update Text
      </button>

      {modalOpen && (
        <div
          className="modal fade show dark-modal"
          role="dialog"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Text</h5>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control dark-textarea"
                  placeholder="New Content"
                  value={writtentext}
                  onChange={(e) => updateWrittenText(e.target.value)}
                ></textarea>
              </div>
              <div className="modal-footer action-buttons">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={() => {
                    replaceOriginalText(writtentext);
                    updateWrittenText("");
                    setModalOpen(false);
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateText;
