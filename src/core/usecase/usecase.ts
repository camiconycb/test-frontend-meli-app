export interface UseCase<Type, Params>{
  call(params: Params): Promise<Type | void>;
}
