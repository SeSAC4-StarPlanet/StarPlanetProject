import NameInput from "../SignUp/NameInput";
import EmailInput from "../SignUp/EmailInput";
import Button from "../SignUp/Button";
import IdInputEmpty from "../FindId/IdInputEmpty";
import PwInput from "../SignUp/PwInput";
const ResetPw2 = () => {
  return (
    <div className="ResetPw2Wrapper">
      <div className="ResetPw2Section">
        <div className="ResetPw2HeaderSection">
          <div className="ResetPw2Header">비밀번호 재설정</div>
        </div>
        <div className="ResetPw2Text">새로운 비밀번호를 입력해주세요.</div>
        <div className="ResetPw2Text">앞으론 까먹지마 새꺄</div>
        <PwInput />
        <Button text={"비밀번호 재설정"} />
      </div>
    </div>
  );
};

export default ResetPw2;
