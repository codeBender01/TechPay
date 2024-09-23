import { FC } from "react";

import { Button } from "antd";

import { FiUpload, FiDownload } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";

import "../antd.css";

const ListHeader: FC = () => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <div className="flex flex-col gap-[20px]">
        <div className="text-lg text-secondaryBlack font-bold font-secondary">
          Клиeнты
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center capitalize font-main text-sm text-secondaryBlack font-semibold cursor-pointer hover:opacity-70 duration-150 gap-[8px]">
            <FiUpload />
            import
          </div>
          <div className="flex items-center capitalize font-main text-sm text-secondaryBlack font-semibold cursor-pointer hover:opacity-70 duration-150 gap-[8px]">
            <FiDownload />
            export
          </div>
        </div>
      </div>

      <Button className="bg-purple text-white text-sm rounded-lg px-[14px] py-4 font-main font-semibold">
        <IoAddOutline size={22} />
        Добавить
      </Button>
    </div>
  );
};

export default ListHeader;
