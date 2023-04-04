import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

interface WindowProps extends PropsWithChildren {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Window: FC<WindowProps> = ({ children, setIsVisible }) => {
  return (
    <>
      <div className="absolute w-screen h-screen bg-black opacity-75 top-0 left-0 "></div>
      <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center flex-col gap-5">
        <div className="h-fit w-fit flex items-end flex-col gap-5 min-h-[1px] max-w-[80%] max-h-[80%]">
          <div
            className="rounded-md bg-white h-10 w-10 text-center cursor-pointer"
            onClick={() => setIsVisible(false)}
          >
            <span className="leading-10 ">X</span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Window;
