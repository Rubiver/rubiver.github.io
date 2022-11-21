import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { purple } from "@mui/material/colors";

function MyPage() {
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            alert("잘못된 접근입니다.");
            window.location.replace("/");
        } else {
            axios
                .post("http://localhost:4000/users/onLogin", null, {
                    params: {
                        email: localStorage.getItem("id"),
                        token: localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    if (res.data.result === "wrong token") {
                        window.location.replace("/");
                        alert("잘못된 접근입니다.");
                    }
                });
        }
    }, []);
    
    //const email = JSON.parse(localStorage.getItem('id') as string);
    const email = localStorage.getItem('id') as string;
    const onClickDelete = () => {
        if (email !== "") {
            axios
                .post("http://localhost:4000/users/onDelete", null, {
                    params: {
                        email: email,
                    },
                })
                .then((res) => {
                    if(res.data.result ==="success"){
                        localStorage.clear();
                        localStorage.setItem("id", email);
                        localStorage.setItem("token", res.data.token);
                        alert("로그인 성공");
                        window.location.replace("/");
                    }else if(res.data.result ==="wrong id"){
                        alert("존재하지 않는 아이디 입니다.");
                    }
                })
                .catch();
        }
    };
    const callApi = async () => {
        axios.get("/delete").then((res) => console.log(res.data.test));
    };
    useEffect(() => {
        callApi();
    }, []);
    return (
        <div>
            <h1>MyPage</h1>
            <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ mt: 1, mb: 2 }}
                onClick={() => {
                    onClickDelete();
                }}
            >
                계정삭제
            </Button>
        </div>
        
    );
}
export default MyPage;
