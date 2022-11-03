import { addListener } from "process";
import React from "react";
import { useState, useEffect } from "react";
import RegisterOrEdit from "../BoardPage/Sections/RegisterOrEdit";

function RegisterPage() {
    
    const [TitleValue, setTitleValue] = useState("");
    const [ContentValue, setContentValue] = useState("");

    const onTitleChange = (event: any) => {
        setTitleValue(event.currentTarget.value);
    };
    console.log(TitleValue);

    const onContentChange = (event: any) => {
        setContentValue(event.currentTarget.value);
    };
    console.log(ContentValue);
    useEffect(() => {
        if (localStorage.getItem('token') === null) {
        alert("잘못된 접근입니다.");
          window.location.replace('/')
        }
      }, []);
    return (
        <RegisterOrEdit
            titleValue={TitleValue}
            ContentValue={ContentValue}
            handleTitleChange={onTitleChange}
            handleContentChange={onContentChange}
        ></RegisterOrEdit>
    );
}

export default RegisterPage;
