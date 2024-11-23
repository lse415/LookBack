import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.h2`
  font-size: 1.4rem;
  color: #3e3e3e;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
  resize: none;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #f4c2c2;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #e69a9a;
  }
`;

interface QuestionModalProps {
  question: string;
  answer: string;
  onSave: (answer: string) => void;
  onClose: () => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  answer,
  onSave,
  onClose,
}) => {
  const [editableAnswer, setEditableAnswer] = React.useState(answer);

  const handleSave = () => {
    onSave(editableAnswer);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <QuestionText>{question}</QuestionText>
        <TextArea
          value={editableAnswer}
          onChange={(e) => setEditableAnswer(e.target.value)}
          placeholder="답변을 입력하세요..."
        />
        <Button onClick={handleSave}>저장</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default QuestionModal;
