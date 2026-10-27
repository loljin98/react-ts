import React, { useState } from "react";

const InputValue = () => {
    const [text, setText] = useState<string>("");

    // 입력값 변경 함수
    // 이벤트 타입 - React. Change~~~
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }


    return(
        <div>
            <h2>글자입력</h2>
            <input type="text"
                   value={text}
                   onChange={handleTextChange}
                   placeholder="글자를 입력하세요"
             />
             <p>입력된 글자 : {text}</p>
        </div>
    )
}

export default InputValue;