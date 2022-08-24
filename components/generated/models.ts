// Code generated by wunderctl. DO NOT EDIT.

export interface AddTodoInput {
	title: string;
	message: string;
}

export interface AddTodoResponse {
	data?: AddTodoResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface TodosResponse {
	data?: TodosResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface AddTodoResponseData {
	createOnetodos?: {
		id: string;
		message: string;
		title: string;
	};
}

export interface TodosResponseData {
	findManytodos: {
		id: string;
		message: string;
		title: string;
	}[];
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}