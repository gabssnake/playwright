// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as js from './javascript';

type Boxed<Args extends any[]> = { [Index in keyof Args]: Args[Index] | js.JSHandle };
type PageFunction<Args extends any[], R = any> = string | ((...args: Args) => R | Promise<R>);
type PageFunctionOn<On, Args extends any[], R = any> = string | ((on: On, ...args: Args) => R | Promise<R>);

export type Evaluate = <Args extends any[], R>(pageFunction: PageFunction<Args, R>, ...args: Boxed<Args>) => Promise<R>;
export type EvaluateHandle = <Args extends any[]>(pageFunction: PageFunction<Args>, ...args: Boxed<Args>) => Promise<js.JSHandle>;
export type $Eval = <Args extends any[], R>(selector: string, pageFunction: PageFunctionOn<Element, Args, R>, ...args: Boxed<Args>) => Promise<R>;
export type $$Eval = <Args extends any[], R>(selector: string, pageFunction: PageFunctionOn<Element[], Args, R>, ...args: Boxed<Args>) => Promise<R>;
export type EvaluateOn = <Args extends any[], R>(pageFunction: PageFunctionOn<any, Args, R>, ...args: Boxed<Args>) => Promise<R>;
export type EvaluateHandleOn = <Args extends any[]>(pageFunction: PageFunctionOn<any, Args>, ...args: Boxed<Args>) => Promise<js.JSHandle>;

export type Rect = { x: number, y: number, width: number, height: number };
export type Point = { x: number, y: number };
