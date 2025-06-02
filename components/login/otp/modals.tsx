import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { InputOtp } from "@heroui/react";
import React, { useState } from "react";
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = React.useState("");
  return (
    <>
      <Button onPress={onOpen} className="">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Verify your email
              </ModalHeader>
              <ModalBody className="justify-center">
                <div className="flex flex-col items-start gap-2 justify-center items-center">
                  <InputOtp length={4} value={value} onValueChange={setValue} />
                  {/* <div className="text-small text-default-500">
                    OTP value:{" "}
                    <span className="text-md font-medium">{value}</span>
                  </div> */}
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
