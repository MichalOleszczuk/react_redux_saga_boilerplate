export interface IActionPayload<IPayload, IType = string> extends IAction<IType> {
  payload: IPayload;
}

export interface ICreateActionWithPayload<IPayload, IType> {
  (payload: IPayload): IActionPayload<IPayload, IType>;
}

export interface IAction<IType = string> {
  type: IType;
}

export interface ICreateActionWithoutPayload<IType = string> {
  (): IAction<IType>;
}

const CreateAction = <T = string>(type: T): ICreateActionWithoutPayload<T> => {
  return () => ({
    type,
  });
};

export const CreateActionWithPayload = <PayloadType = unknown, IType = string>(
  type: IType,
): ICreateActionWithPayload<PayloadType, IType> => {
  return (payload: PayloadType) => ({
    type,
    payload,
  });
};

export default CreateAction;
