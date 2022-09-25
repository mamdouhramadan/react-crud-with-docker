import React from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import InputField from "../InputField";
import { studentForm } from "../../constants";
import { useSelector } from "react-redux";
import { ModalLogic } from "./logic";

export default function AppModal() {
  const showModal = useSelector((state) => state.modal.show);
  const titleModal = useSelector((state) => state.modal.title);
  const userModal = useSelector((state) => state.modal.user);
  const typeModal = useSelector((state) => state.modal.type);

  const { handleModalClose, handleOnChange, handleOnSubmit } = ModalLogic();

  return (
    <MDBModal
      staticBackdrop
      show={showModal || false}
      tabIndex="-1"
      className="main-modal"
    >
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{titleModal}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={() => handleModalClose()}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              {studentForm.map((item, index) => {
                return (
                  <MDBCol size="12" key={index}>
                    <InputField
                      form={item}
                      onChange={(e) => handleOnChange(e)}
                      value={userModal[item.name] || null}
                      readOnly={typeModal === "view" || item.readOnly}
                    />
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn
              className="text-dark"
              color="light"
              onClick={() => handleModalClose()}
            >
              Close
            </MDBBtn>

            <MDBBtn onClick={(e) => handleOnSubmit(e)}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
