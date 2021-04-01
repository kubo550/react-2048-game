import * as S from "./Alert.style";

interface AlertProps {
  onClick: () => void;
}

const Alert: React.FC<AlertProps> = ({ onClick }) => {
  return (
    <S.AlertWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <h2>Game Over!</h2>
      <S.Button onClick={onClick}> Try Again </S.Button>
    </S.AlertWrapper>
  );
};

export default Alert;
