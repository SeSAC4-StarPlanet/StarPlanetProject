import Button from "@mui/material/Button";
import "./SuccessSignUpBtn.scss";

const SuccessSignUpBtn = () => {
  return (
    <div className="successSignUpBtnContainer">
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default SuccessSignUpBtn;
