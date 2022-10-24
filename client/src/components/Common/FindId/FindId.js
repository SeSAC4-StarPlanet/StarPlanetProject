import NameInput from "../../Common/SignUp/NameInput";
import EmailInputEmpty from "./EmailInputEmpty";
import Button from "../SignUp/Button";
import IdInputEmpty from "./IdInputEmpty";
const FindId = () => {
  return (
    <div className="findIdWrapper">
      <div className="findIdSection">
        <div className="findIdHeaderSection">
          <a className="findIdHeader">아이디 찾기</a>
        </div>
        <h3>회원님의 아이디를 찾아드리겠습니다.</h3>
        <h3>회원가입시 기재하셨던 정보를 입력해주세요.</h3>
        <IdInputEmpty />
        <EmailInputEmpty />
        <Button text={"아이디 찾기"} />
      </div>
    </div>
  );
};

export default FindId;
