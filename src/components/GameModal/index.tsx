"use client";
import { useRef, useEffect, ReactNode } from "react";

type GameContinueProps = {
  title: string;
  onFinish: () => void;
  onContinue: () => void;
  children: ReactNode;
  showDialog: boolean;
};

export default function GameContinue({
  children,
  onContinue,
  onFinish,
  title,
  showDialog,
}: GameContinueProps) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (showDialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onFinish();
  };

  const clickOk = () => {
    onContinue();
    closeDialog();
  };

  const dialog: JSX.Element | null = showDialog ? (
    <dialog
      ref={dialogRef}
      className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-2xl backdrop:bg-gray-800/50"
    >
      <div className="p-8 flex flex-col gap-6 bg-gray-200">
        <div>
          <h1 className=" bg-white rounded-lg p-4 text-3xl font-bold text-lime-800">{title}</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg flex flex-col gap-3 p-4 text-left">{children}</div>
          <div className="flex justify-center items-center gap-8 max-md:gap-2 flex-wrap font-bold">
            <button onClick={clickOk} className="bg-blue-500 py-4 px-6 rounded-lg text-white">Continuar</button>
            <button onClick={closeDialog} className="bg-teal-950 py-4 px-6 rounded-lg text-white">Finalizar</button>
          </div>
        </div>
      </div>
    </dialog>
  ) : null;

  return dialog;
}
