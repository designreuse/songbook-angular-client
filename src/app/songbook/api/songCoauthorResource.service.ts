/**
 * Songbook API
 * Tourist songs application
 *
 * OpenAPI spec version: 1.5.5
 * Contact: andrzej.przybysz01@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SongCoauthorDTO } from '../model/songCoauthorDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SongCoauthorResourceService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * create
     * 
     * @param songCoauthorDTO songCoauthorDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST3(songCoauthorDTO: SongCoauthorDTO, observe?: 'body', reportProgress?: boolean): Observable<SongCoauthorDTO>;
    public createUsingPOST3(songCoauthorDTO: SongCoauthorDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SongCoauthorDTO>>;
    public createUsingPOST3(songCoauthorDTO: SongCoauthorDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SongCoauthorDTO>>;
    public createUsingPOST3(songCoauthorDTO: SongCoauthorDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (songCoauthorDTO === null || songCoauthorDTO === undefined) {
            throw new Error('Required parameter songCoauthorDTO was null or undefined when calling createUsingPOST3.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<SongCoauthorDTO>(`${this.basePath}/api/coauthors`,
            songCoauthorDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * delete
     * 
     * @param songCoauthorDTO songCoauthorDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE3(songCoauthorDTO: SongCoauthorDTO, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE3(songCoauthorDTO: SongCoauthorDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE3(songCoauthorDTO: SongCoauthorDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE3(songCoauthorDTO: SongCoauthorDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (songCoauthorDTO === null || songCoauthorDTO === undefined) {
            throw new Error('Required parameter songCoauthorDTO was null or undefined when calling deleteUsingDELETE3.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.delete<any>(`${this.basePath}/api/coauthors`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByAuthorId
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByAuthorIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<SongCoauthorDTO>>;
    public getByAuthorIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SongCoauthorDTO>>>;
    public getByAuthorIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SongCoauthorDTO>>>;
    public getByAuthorIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getByAuthorIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<SongCoauthorDTO>>(`${this.basePath}/api/coauthors/author/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getByFunction
     * 
     * @param _function function
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getByFunctionUsingGET(_function: 'MUSIC' | 'TEXT', observe?: 'body', reportProgress?: boolean): Observable<Array<SongCoauthorDTO>>;
    public getByFunctionUsingGET(_function: 'MUSIC' | 'TEXT', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SongCoauthorDTO>>>;
    public getByFunctionUsingGET(_function: 'MUSIC' | 'TEXT', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SongCoauthorDTO>>>;
    public getByFunctionUsingGET(_function: 'MUSIC' | 'TEXT', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (_function === null || _function === undefined) {
            throw new Error('Required parameter _function was null or undefined when calling getByFunctionUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<SongCoauthorDTO>>(`${this.basePath}/api/coauthors/function/${encodeURIComponent(String(_function))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getBySongId
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBySongIdUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<SongCoauthorDTO>>;
    public getBySongIdUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SongCoauthorDTO>>>;
    public getBySongIdUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SongCoauthorDTO>>>;
    public getBySongIdUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBySongIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<SongCoauthorDTO>>(`${this.basePath}/api/coauthors/song/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update
     * 
     * @param songCoauthorDTO songCoauthorDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT3(songCoauthorDTO: SongCoauthorDTO, observe?: 'body', reportProgress?: boolean): Observable<SongCoauthorDTO>;
    public updateUsingPUT3(songCoauthorDTO: SongCoauthorDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SongCoauthorDTO>>;
    public updateUsingPUT3(songCoauthorDTO: SongCoauthorDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SongCoauthorDTO>>;
    public updateUsingPUT3(songCoauthorDTO: SongCoauthorDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (songCoauthorDTO === null || songCoauthorDTO === undefined) {
            throw new Error('Required parameter songCoauthorDTO was null or undefined when calling updateUsingPUT3.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<SongCoauthorDTO>(`${this.basePath}/api/coauthors`,
            songCoauthorDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}