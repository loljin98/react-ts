import { useState } from "react";
import DrinkList from "./DrinkList";

const Drink = () => {
    const [drinks, setDrinks] = useState<string[]>([]);
    const [InputValue, setInputValue] = useState<string>("");

    // 입력값 변경 핸들러
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {     
        setInputValue(e.target.value);
    }

    // 음료 추가 함수 - 버튼을 클릭할때 배열에 음료가 저장
    const addDrink = () => {
         if(InputValue.trim() === ""){
             alert("음료 이름을 입력하세요.");
             return;
            }
            setDrinks([...drinks, InputValue]);
        

  setDrinks([...drinks, InputValue]);
    setInputValue("");  
        }

    return(
        <div>
            <h2>음료 리스트</h2>
            <input type="text"
                   value={InputValue}
                   onChange={handleInputChange}
                   placeholder="음료를 입력하세요"
             />
            <button onClick={addDrink}>음료 추가</button>
            {/* 음료 출력 */}
            <p>음료 : {InputValue}</p>

            {/* 음료 리스트 출력*/}
            {/* <p>음료 리스트 : {drinks}</p> */}
            <DrinkList drinks={drinks} />
            {/* <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Drink;
