import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ListHeader from "../components/ListHeader";
import { Tabs, TabsProps, Table, TableProps, Input, Select } from "antd";

import { stores } from "../pageData/data";

import { LuPencil } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";

import "../antd.css";

const columnTitleClassname =
  "font-main text-mainBlack font-semibold text-sm2 uppercase";
const rowValueClassname = "text-secondaryBlack text-sm font-main font-normal";

const options = [
  {
    label: "Новые",
    value: "new",
  },
  {
    label: "Старые",
    value: "old",
  },
];

const StoresList: FC = () => {
  const navigate = useNavigate();

  const columns: TableProps["columns"] = [
    {
      title: <div className={columnTitleClassname}>Название</div>,
      dataIndex: "name",
      key: "name",
      render: (val) => {
        return (
          <div className="flex items-center gap-[4px]">
            <div className="w-[42px] h-[42px] rounded-round bg-bgGray"></div>
            <div className="text-secondaryBlack text-sm font-main font-medium">
              {val}
            </div>
          </div>
        );
      },
    },
    {
      title: <div className={columnTitleClassname}>Локация</div>,
      dataIndex: "location",
      key: "location",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Категорий</div>,
      dataIndex: "categories",
      key: "categories",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Всего товаров</div>,
      dataIndex: "totalProducts",
      key: "totalProducts",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Действия</div>,
      key: "actions",
      render: () => {
        return (
          <div className="flex items-center gap-[8px]">
            <div className="text-textGray cursor-pointer hover:opacity-80 duration-200">
              <LuPencil size={20} />
            </div>
            <div className="text-textGray cursor-pointer hover:opacity-80 duration-200">
              <MdOutlineArrowForward
                size={22}
                onClick={() => {
                  navigate(`/admin/stores/edit`);
                }}
              />
            </div>
          </div>
        );
      },
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Все",
      children: (
        <>
          <div className="my-[24px] flex justify-between items-center">
            <Input
              prefix={<FiSearch size={18} />}
              placeholder="Поиск"
              className="py-[14px] w-[75%]"
            />
            <Select
              options={options}
              className="w-[20%] h-[50px]"
              suffixIcon={<FaCaretDown />}
              placeholder="Сортировать"
            />
          </div>
          <Table
            columns={columns}
            dataSource={stores}
            rowSelection={{ type: "checkbox" }}
            pagination={{
              pageSize: 5,
            }}
          />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col px-[64px] pt-[80px] pb-4">
      <ListHeader title="Магазины" />
      <div
        className="mt-[40px] px-4 py-2 rounded-[20px] "
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <Tabs defaultActiveKey="1" className="custom-tabs" items={items} />
      </div>
    </div>
  );
};

export default StoresList;
