import {
  ForwardRefRenderFunction,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export type ForwardRefComponent<
  T extends HTMLElement,
  P = {}
> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

export type ForwardRefComponentNoProps<T extends HTMLElement> =
  ForwardRefComponent<T, {}>;
