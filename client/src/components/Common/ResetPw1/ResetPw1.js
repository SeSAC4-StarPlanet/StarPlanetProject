import NameInput from "../SignUp/NameInput";
import EmailInput from "../SignUp/EmailInput";
import Button from "../SignUp/Button";
import IdInputEmpty from "../FindId/IdInputEmpty";

const ResetPw1 = () => {
  return (
    <div className="ResetPw1Wrapper">
      <div className="ResetPw1Section">
        <div className="ResetPw1HeaderSection">
          <div className="ResetPw1Header">비밀번호 재설정</div>
        </div>
        <div className="ResetPw1Text">새로운 비밀번호로 변경해드립니다.</div>
        <div className="ResetPw1Text">
          회원가입시 기재하셨던 정보를 입력해주세요.
        </div>
        <IdInputEmpty />
        <NameInput />
        <EmailInput />
        <Button text={"비밀번호 재설정"} />
      </div>
    </div>
  );
};

export default ResetPw1;
