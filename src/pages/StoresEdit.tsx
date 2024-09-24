import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Switch, ConfigProvider, Button } from "antd";

import { MdOutlineArrowBack } from "react-icons/md";

import "../antd.css";

const StoresEdit: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-[64px] pt-[80px] pb-4">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-[8px] font-main text-secondaryBlack font-medium text-sm cursor-pointer hover:opacity-80 duration-100"
      >
        <MdOutlineArrowBack size={20} />
        Магазины
      </div>
      <div className="mt-[40px] flex items-center gap-4">
        <div className="w-[64px] h-[64px] rounded-round bg-bgGray"></div>
        <div className="flex flex-col">
          <div className="font-secondary text-lg text-secondaryBlack font-bold">
            Alma pro
          </div>
          <div className="font-main font-medium text-secondaryBlack text-sm">
            user_id:{" "}
            <span className="bg-secBlackOp rounded-pill px-3 py-1 ml-1">
              5e86805e2bafd54f66cc95c3
            </span>
          </div>
        </div>
      </div>
      <div
        className="mt-[40px] px-6 py-8 rounded-[20px]"
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div className="font-secondary font-bold text-normal text-secondaryBlack">
          Изменить информацию
        </div>
        <Form
          layout="vertical"
          className="flex items-center flex-wrap justify-between mt-4"
          fields={[
            {
              name: ["fullname"],
              value: "Аманов Аман",
            },
            {
              name: ["email"],
              value: "amanowaman@gmail.com",
            },
            {
              name: ["city"],
              value: "АШГАБАТ",
            },
            {
              name: ["region"],
              value: "АХАЛ",
            },
            {
              name: ["address1"],
              value: "Магтумгули",
            },
            {
              name: ["address2"],
              value: "Магтумгули",
            },
            {
              name: ["phoneNumber"],
              value: "+993 77 77 77 77",
            },
          ]}
        >
          <Form.Item
            name="fullname"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Фио</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
          <Form.Item
            name="email"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Email</div>}
          >
            <Input className="h-[55px]" type="email" />
          </Form.Item>
          <Form.Item
            name="city"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Город</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
          <Form.Item
            name="region"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Велаят</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
          <Form.Item
            name="address1"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Адрес</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
          <Form.Item
            name="address2"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Адрес 2</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            className="w-[48%]"
            label={<div className="font-main text-textGray p-0">Номер</div>}
          >
            <Input className="h-[55px]" />
          </Form.Item>
        </Form>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div className="font-main font-medium text-normal text-deleteRed hover:opacity-80 duration-150 cursor-pointer">
              Заблокировать доступ
            </div>
            <p className="font-light font-main text-sm text-textGray">
              Заблокировать доступ к данному юзеру к платформе
            </p>
          </div>
          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  handleBg: "#fff",
                  colorPrimary: "#6366F1", // Color when checked
                  colorBgContainer: "#fff", // Color when unchecked
                },
              },
            }}
          >
            <Switch defaultChecked />
          </ConfigProvider>
        </div>

        <div className="w-[100%] h-[1px] bg-[#F2F4F7] mt-[25px] mb-[12px]"></div>

        <div className="flex gap-4 items-center">
          <Button className="bg-purple text-white text-sm rounded-lg px-[14px] h-[45px] font-main font-semibold">
            Обновить
          </Button>
          <Button className="bg-white text-secondaryBlack text-sm rounded-lg px-[14px] h-[45px] font-main font-semibold hover:opacity-80">
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoresEdit;
