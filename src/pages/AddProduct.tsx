import { FC } from "react";

import {
  Input,
  Upload,
  Form,
  ConfigProvider,
  Switch,
  Select,
  Button,
} from "antd";
import TextEditor from "../components/TextEditor";

import { FiUpload } from "react-icons/fi";

const options = [
  {
    label: "Кроссовки",
    value: "new",
  },
  {
    label: "Товары для дома",
    value: "old",
  },
];

const AddProduct: FC = () => {
  return (
    <div className="flex flex-col px-[64px] pt-[80px] pb-4">
      <div className="flex flex-col gap-[20px]">
        <div className="text-lg text-secondaryBlack font-bold font-secondary">
          Добавить товар
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="font-main font-medium text-secondaryBlack text-sm">
            Dashboard
          </div>
          <div className="w-[4px] h-[4px] bg-textGray rounded-round"></div>
          <div className="font-main font-medium text-secondaryBlack text-sm">
            Products
          </div>
          <div className="w-[4px] h-[4px] bg-textGray rounded-round"></div>
          <div className="font-main font-medium text-textGray text-sm">
            Create
          </div>
        </div>
      </div>

      <div
        className="mt-[40px] px-4 py-8 rounded-[20px] flex justify-between"
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div className="font-secondary font-bold text-secondaryBlack text-normal">
          Информация
        </div>
        <div className="w-[60%]">
          <Input
            placeholder="Наименование товара"
            className="w-[100%] h-[55px]"
          />
          <div className="mt-[26px] mb-[20px] text-textGray font-main font-medium text-sm">
            Описание
          </div>
          <TextEditor />
        </div>
      </div>
      <div
        className="mt-[40px] px-4 py-8 rounded-[20px] flex justify-between"
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div>
          <div className="font-secondary font-bold text-secondaryBlack text-normal">
            Изображение
          </div>
          <p className="font-light font-main text-textGray text-sm mt-[6px]">
            Пожалуйста загрузите изображение товара
          </p>
        </div>

        <Upload className="w-[60%] flex bg-paleGray justify-center">
          <div className="bg-paleGray w-[100%] p-8 flex items-center gap-2">
            <div className="w-[64px] h-[64px] rounded-round bg-[#f2f3f5] flex items-center justify-center">
              <FiUpload size={24} />
            </div>
            <div>
              <div className="text-secondaryBlack underline font-secondary font-bold text-normal cursor-pointer hover:opacity-80 duration-150">
                Нажмите чтобы загрузить
              </div>
              <p className="text-textGray font-main font-light text-sm">
                (SVG, JPG, PNG, or gif maximum 900x400)
              </p>
            </div>
          </div>
        </Upload>
      </div>
      <div
        className="mt-[40px] px-4 py-8 rounded-[20px] flex justify-between"
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div className="font-secondary font-bold text-secondaryBlack text-normal">
          Цена
        </div>
        <div className="w-[60%]">
          <Form layout="vertical" className="flex flex-col">
            <Form.Item
              label={
                <div className="text-textGray font-main font-medium text-sm2">
                  Цена товара
                </div>
              }
            >
              <Input defaultValue={0} className="h-[55px]" />
            </Form.Item>
            <Form.Item
              label={
                <div className="text-textGray font-main font-medium text-sm2">
                  В рассрочку
                </div>
              }
            >
              <Input defaultValue={0} className="h-[55px]" />
            </Form.Item>
            <Form.Item
              label={
                <div className="text-secondaryBlack font-main font-light text-normal">
                  Покупка в рассрочку
                </div>
              }
            >
              <ConfigProvider
                theme={{
                  components: {
                    Switch: {
                      handleBg: "#fff",
                      colorPrimary: "#6366F1",
                      colorBgContainer: "#fff",
                    },
                  },
                }}
              >
                <Switch defaultChecked />
              </ConfigProvider>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div
        className="mt-[40px] px-4 py-8 rounded-[20px] flex justify-between"
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div className="font-secondary font-bold text-secondaryBlack text-normal">
          Категория
        </div>
        <div className="w-[60%]">
          <Form layout="vertical" className="flex flex-col">
            <Form.Item>
              <Select
                options={options}
                className="w-[100%] h-[55px]"
                placeholder="Категория"
              />
            </Form.Item>
            <Form.Item
              label={
                <div className="text-textGray font-main font-medium text-sm2">
                  Barcode
                </div>
              }
            >
              <Input placeholder="925487986526" className="w-[100%] h-[55px]" />
            </Form.Item>
            <Form.Item
              label={
                <div className="text-textGray font-main font-medium text-sm2">
                  SKU
                </div>
              }
            >
              <Input placeholder="IYV-8745" className="w-[100%] h-[55px]" />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-[30px] w-fit ml-auto">
        <Button className="bg-white text-secondaryBlack text-sm rounded-lg px-[14px] h-[45px] font-main font-semibold hover:opacity-80">
          Отмена
        </Button>
        <Button className="bg-purple text-white text-sm rounded-lg px-[14px] h-[45px] font-main font-semibold">
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
