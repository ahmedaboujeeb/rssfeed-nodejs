import { Request, Response, NextFunction, RequestHandler } from "express";

type PromiseHandler = (
	req: Request<any, any, any, any, any>,
	res: Response,
	next: NextFunction
) => Promise<Response | void>;

export default function asyncWrapper(fn: PromiseHandler): RequestHandler {
	return function handler(req: Request, res: Response, next: NextFunction) {
		return Promise.resolve(fn(req, res, next)).catch(next);
	};
}
