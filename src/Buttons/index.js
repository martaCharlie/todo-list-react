import { Button, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Button>
    {tasks.length > 0 && (
      <>
        <StyledButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </StyledButton>
        <StyledButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledButton>
      </>
    )}
  </Button>
);

export default Buttons;
