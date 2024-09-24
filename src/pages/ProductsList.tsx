import { FC } from "react";

import ListHeader from "../components/ListHeader";
import { Table, TableProps, Input, Select } from "antd";

import { products } from "../pageData/data";

import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

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

const ProductsList: FC = () => {
  const columns: TableProps["columns"] = [
    {
      title: <div className={columnTitleClassname}>Наименование</div>,
      key: "name",
      render: (val) => {
        return (
          <div className="flex items-center gap-[4px]">
            <div className="w-[80px] h-[80px] bg-bgGray">
              <img
                src={val.img}
                alt="product"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="text-secondaryBlack text-sm font-main font-medium">
              {val.name}
            </div>
          </div>
        );
      },
    },
    {
      title: <div className={columnTitleClassname}>Количество</div>,
      dataIndex: "quantity",
      key: "quantity",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Цена</div>,
      dataIndex: "price",
      key: "price",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>sku</div>,
      dataIndex: "sku",
      key: "sku",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Status</div>,
      dataIndex: "isPublished",
      key: "isPublished",
      render: (val) => (
        <div className="text-green rounded-pill py-1 bg-lightGreen text-center uppercase">
          {val ? "Published" : "Not published"}
        </div>
      ),
    },
    {
      title: <div className={columnTitleClassname}>Действия</div>,
      key: "actions",
      render: () => {
        return (
          <div className="text-textGray cursor-pointer hover:opacity-80 duration-200">
            <HiDotsHorizontal size={20} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col px-[64px] pt-[80px] pb-4">
      <ListHeader
        title="Продукты"
        isProducts={true}
        path="/admin/products/add"
      />
      <div
        className="mt-[40px] px-4 py-2 rounded-[20px] "
        style={{
          boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 22px 0px #0000000A",
        }}
      >
        <div className="my-[24px] flex justify-between items-center">
          <Input
            prefix={<FiSearch size={18} />}
            placeholder="Поиск товаров"
            className="py-[14px] w-[100%]"
          />
        </div>
        <div className="mb-[24px] flex items-center gap-4">
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Категория"
          />
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Статус"
          />
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Фильтр"
          />
        </div>
        <Table
          columns={columns}
          dataSource={products}
          pagination={{
            pageSize: 5,
          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
