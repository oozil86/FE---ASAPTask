//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.1.0 (NJsonSchema v10.7.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';
import { AppConfig } from '../../app/app.config';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class ApplicationServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
         this.baseUrl = AppConfig.settings.NSwagURL;
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    applyToJob(body: JobApplicationDto | undefined): Observable<StringCommonResponse> {
        let url_ = this.baseUrl + "/api/Application/ApplyToJob";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processApplyToJob(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processApplyToJob(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponse>;
        }));
    }

    protected processApplyToJob(response: HttpResponseBase): Observable<StringCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<StringCommonResponse>(null as any);
    }
}

@Injectable()
export class IdentityServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
         this.baseUrl = AppConfig.settings.NSwagURL;
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    register(body: RegisterRequestDto | undefined): Observable<IdentityResult> {
        let url_ = this.baseUrl + "/api/Identity/Register";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processRegister(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processRegister(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<IdentityResult>;
                }
            } else
                return _observableThrow(response_) as any as Observable<IdentityResult>;
        }));
    }

    protected processRegister(response: HttpResponseBase): Observable<IdentityResult> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as IdentityResult;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<IdentityResult>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    login(body: LoginRequestDto | undefined): Observable<LoginResponseDto> {
        let url_ = this.baseUrl + "/api/Identity/Login";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processLogin(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processLogin(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<LoginResponseDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<LoginResponseDto>;
        }));
    }

    protected processLogin(response: HttpResponseBase): Observable<LoginResponseDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as LoginResponseDto;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<LoginResponseDto>(null as any);
    }
}

@Injectable()
export class JobServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
         this.baseUrl = AppConfig.settings.NSwagURL;
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    insertNewJob(body: JobCreateDto | undefined): Observable<StringCommonResponse> {
        let url_ = this.baseUrl + "/api/Job/InsertNewJob";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processInsertNewJob(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processInsertNewJob(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponse>;
        }));
    }

    protected processInsertNewJob(response: HttpResponseBase): Observable<StringCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<StringCommonResponse>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    upateJob(body: JobDto | undefined): Observable<StringCommonResponse> {
        let url_ = this.baseUrl + "/api/Job/UpateJob";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpateJob(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpateJob(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponse>;
        }));
    }

    protected processUpateJob(response: HttpResponseBase): Observable<StringCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<StringCommonResponse>(null as any);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    deleteJob(id: number | undefined): Observable<StringCommonResponse> {
        let url_ = this.baseUrl + "/api/Job/DeleteJob?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteJob(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteJob(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponse>;
        }));
    }

    protected processDeleteJob(response: HttpResponseBase): Observable<StringCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<StringCommonResponse>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getPagedJobs(body: PagationFilter | undefined): Observable<JobDtoPagedEntityCommonResponse> {
        let url_ = this.baseUrl + "/api/Job/GetPagedJobs";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetPagedJobs(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetPagedJobs(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<JobDtoPagedEntityCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<JobDtoPagedEntityCommonResponse>;
        }));
    }

    protected processGetPagedJobs(response: HttpResponseBase): Observable<JobDtoPagedEntityCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as JobDtoPagedEntityCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<JobDtoPagedEntityCommonResponse>(null as any);
    }
}

export enum EnumResponseResult {
    _0 = 0,
    _1 = 1,
    _2 = 2,
}

export interface IdentityError {
    code: string | undefined;
    description: string | undefined;
}

export interface IdentityResult {
    readonly succeeded: boolean;
    readonly errors: IdentityError[] | undefined;
}

export interface JobApplicantDto {
    name: string | undefined;
    email: string | undefined;
    mobileNumber: string | undefined;
}

export interface JobApplicationDto {
    jobId: number;
    applicant: JobApplicantDto;
}

export interface JobCreateDto {
    name: string | undefined;
    description: string | undefined;
    validityDurationTo: string | undefined;
    validityDurationFrom: string | undefined;
    maximumApplications: number;
    responsibilities: string | undefined;
    skills: string | undefined;
    category: string | undefined;
}

export interface JobDto {
    id: number;
    name: string | undefined;
    description: string | undefined;
    validityDurationTo: string | undefined;
    validityDurationFrom: string | undefined;
    maximumApplications: number;
    responsibilities: string | undefined;
    skills: string | undefined;
    category: string | undefined;
}

export interface JobDtoPagedEntity {
    totalCount: number;
    items: JobDto[] | undefined;
}

export interface JobDtoPagedEntityCommonResponse {
    result: EnumResponseResult;
    data: JobDtoPagedEntity;
    errors: string[] | undefined;
}

export interface LoginRequestDto {
    password: string | undefined;
    email: string | undefined;
}

export interface LoginResponseDto {
    token: string | undefined;
    message: string | undefined;
}

export interface PagationFilter {
    start: number;
    rows: number;
    sortOrder: number;
    sortField: string | undefined;
    columns: PagationFilterColumn[] | undefined;
}

export interface PagationFilterColumn {
    name: string | undefined;
    value: string | undefined;
    matchMode: string | undefined;
}

export interface RegisterRequestDto {
    firstName: string | undefined;
    lastname: string | undefined;
    profilePicture: string | undefined;
    password: string | undefined;
    email: string | undefined;
}

export interface StringCommonResponse {
    result: EnumResponseResult;
    data: string | undefined;
    errors: string[] | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
