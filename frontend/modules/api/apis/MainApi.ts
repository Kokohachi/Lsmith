/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BaseResponseModel,
  BuildRequest,
  FileListResponseModel,
  GenerateImageRequest,
  GenerateImageResponseModel,
  HTTPValidationError,
  ModelCurrentResponseModel,
  ModelListResponseModel,
  SetRunnerRequest,
} from '../models';
import {
    BaseResponseModelFromJSON,
    BaseResponseModelToJSON,
    BuildRequestFromJSON,
    BuildRequestToJSON,
    FileListResponseModelFromJSON,
    FileListResponseModelToJSON,
    GenerateImageRequestFromJSON,
    GenerateImageRequestToJSON,
    GenerateImageResponseModelFromJSON,
    GenerateImageResponseModelToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ModelCurrentResponseModelFromJSON,
    ModelCurrentResponseModelToJSON,
    ModelListResponseModelFromJSON,
    ModelListResponseModelToJSON,
    SetRunnerRequestFromJSON,
    SetRunnerRequestToJSON,
} from '../models';

export interface BuildEngineRequest {
    buildRequest: BuildRequest;
}

export interface GenerateImageOperationRequest {
    generateImageRequest: GenerateImageRequest;
}

export interface GeneratorImageRequest {
    generateImageRequest: GenerateImageRequest;
}

export interface GetAllImageFilesRequest {
    category: string;
    page: number;
}

export interface GetImageRequest {
    category: string;
    filename: string;
}

export interface SetRunnerOperationRequest {
    setRunnerRequest: SetRunnerRequest;
}

/**
 * 
 */
export class MainApi extends runtime.BaseAPI {

    /**
     * Build Engine
     */
    async buildEngineRaw(requestParameters: BuildEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.buildRequest === null || requestParameters.buildRequest === undefined) {
            throw new runtime.RequiredError('buildRequest','Required parameter requestParameters.buildRequest was null or undefined when calling buildEngine.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/engine/build`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BuildRequestToJSON(requestParameters.buildRequest),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Build Engine
     */
    async buildEngine(requestParameters: BuildEngineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.buildEngineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate Image
     */
    async generateImageRaw(requestParameters: GenerateImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GenerateImageResponseModel>> {
        if (requestParameters.generateImageRequest === null || requestParameters.generateImageRequest === undefined) {
            throw new runtime.RequiredError('generateImageRequest','Required parameter requestParameters.generateImageRequest was null or undefined when calling generateImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/images/generate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateImageRequestToJSON(requestParameters.generateImageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GenerateImageResponseModelFromJSON(jsonValue));
    }

    /**
     * Generate Image
     */
    async generateImage(requestParameters: GenerateImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GenerateImageResponseModel> {
        const response = await this.generateImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generator Image
     */
    async generatorImageRaw(requestParameters: GeneratorImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GenerateImageResponseModel>> {
        if (requestParameters.generateImageRequest === null || requestParameters.generateImageRequest === undefined) {
            throw new runtime.RequiredError('generateImageRequest','Required parameter requestParameters.generateImageRequest was null or undefined when calling generatorImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/images/generator`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateImageRequestToJSON(requestParameters.generateImageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GenerateImageResponseModelFromJSON(jsonValue));
    }

    /**
     * Generator Image
     */
    async generatorImage(requestParameters: GeneratorImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GenerateImageResponseModel> {
        const response = await this.generatorImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get All Image Files
     */
    async getAllImageFilesRaw(requestParameters: GetAllImageFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileListResponseModel>> {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling getAllImageFiles.');
        }

        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling getAllImageFiles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/images/browser/{category}/{page}`.replace(`{${"category"}}`, encodeURIComponent(String(requestParameters.category))).replace(`{${"page"}}`, encodeURIComponent(String(requestParameters.page))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileListResponseModelFromJSON(jsonValue));
    }

    /**
     * Get All Image Files
     */
    async getAllImageFiles(requestParameters: GetAllImageFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileListResponseModel> {
        const response = await this.getAllImageFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Current Runner
     */
    async getCurrentRunnerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCurrentResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/model/currnet`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCurrentResponseModelFromJSON(jsonValue));
    }

    /**
     * Get Current Runner
     */
    async getCurrentRunner(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCurrentResponseModel> {
        const response = await this.getCurrentRunnerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get Image
     */
    async getImageRaw(requestParameters: GetImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling getImage.');
        }

        if (requestParameters.filename === null || requestParameters.filename === undefined) {
            throw new runtime.RequiredError('filename','Required parameter requestParameters.filename was null or undefined when calling getImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/images/{category}/{filename}`.replace(`{${"category"}}`, encodeURIComponent(String(requestParameters.category))).replace(`{${"filename"}}`, encodeURIComponent(String(requestParameters.filename))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get Image
     */
    async getImage(requestParameters: GetImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Runners
     */
    async getRunnersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelListResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/model/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelListResponseModelFromJSON(jsonValue));
    }

    /**
     * Get Runners
     */
    async getRunners(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelListResponseModel> {
        const response = await this.getRunnersRaw(initOverrides);
        return await response.value();
    }

    /**
     * Set Runner
     */
    async setRunnerRaw(requestParameters: SetRunnerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponseModel>> {
        if (requestParameters.setRunnerRequest === null || requestParameters.setRunnerRequest === undefined) {
            throw new runtime.RequiredError('setRunnerRequest','Required parameter requestParameters.setRunnerRequest was null or undefined when calling setRunner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/model/set`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetRunnerRequestToJSON(requestParameters.setRunnerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseResponseModelFromJSON(jsonValue));
    }

    /**
     * Set Runner
     */
    async setRunner(requestParameters: SetRunnerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponseModel> {
        const response = await this.setRunnerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
