import { FC } from "react";

import { Form, Input, Button } from "antd";

import { IoMdSwitch } from "react-icons/io";

import gradient from "../assets/gradient.png";
import logo from "../assets/logo.png";

import "../antd.css";

const AdminLogin: FC = () => {
  return (
    <div
      className="w-[100%] h-[100vh] max-h-[100vh] flex items-center"
      id="admin-login"
    >
      <div
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
        }}
        className="w-[60%] h-[100%] bg-mainBlack flex justify-center flex-col pl-16"
      >
        <h1 className="text-[33px] text-white font-secondary font-bold">
          TechPay Admin
        </h1>
        <p className="text-textGray font-main font-normal text-normal mt-[10px]">
          Авторизуйтесь в системе для дальнейшего использования
        </p>
      </div>
      <div className="w-[40%] flex flex-col px-16">
        <div className="flex items-center gap-2 mb-[70px]">
          <img src={logo} alt="logo" />
          <h2 className="uppercase text-secondaryBlack font-secondary text-sm font-extrabold">
            techpay
          </h2>
        </div>
        <div>
          <div className="text-secondaryBlack text-[24px] font-bold">Войти</div>
          <p className="font-main text-textGray text-sm font-medium">
            Нет аккаунта?  
            <span className="text-purple ml-2 cursor-pointer hover:opacity-85 duration-150">
              Зарегестрировать
            </span>
          </p>
        </div>
        <Form layout="vertical" className="mt-[32px]">
          <Form.Item name="login">
            <Input className="h-[50px] font-main" placeholder="Логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              className="h-[50px] font-main"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button
              htmlType="submit"
              className="bg-purple text-white w-[100%] font-semibold font-main text-sm py-5 rounded-[12px]"
            >
              Продолжить
            </Button>
          </Form.Item>
        </Form>

        <div className="text-purple font-medium font-main text-sm hover:opacity-85 duration-150 cursor-pointer">
          Забыли пароль?
        </div>

        <div className="absolute bottom-8 right-8 text-white bg-purple w-[44px] h-[44px] rounded-round flex items-center justify-center cursor-pointer hover:text-purple hover:bg-white duration-200 hover:border-[1px] border-purple">
          <IoMdSwitch size={30} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
