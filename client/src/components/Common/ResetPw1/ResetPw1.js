import "./ResetPw.scss";
import NameInput from "../SignUp/SignUpInput/NameInput";
import EmailInput from "../SignUp/SignUpInput/EmailInput";
import Button from "../SignUp/Button";

const FindId = () => {
  return (
    <div className="findIdWrapper">
      <div className="findIdSection">
        <div className="findIdText">
          <h1>비밀번호 재설정</h1>
        </div>
        <h2>새로운 비밀번호로 변경해드립니다.</h2>
        <h3>회원가입시 기재하셨던 정보를 입력해주세요.</h3>

        <NameInput />
        <EmailInput />
        <Button />
      </div>
    </div>
  );
};

export default FindId;
