import { BaseClient } from "./BaseClient";
import { DeviceCodeRequest } from "../request/DeviceCodeRequest";
import { ClientConfiguration } from "../config/ClientConfiguration";
/**
 * OAuth2.0 Device code client
 */
export declare class DeviceCodeClient extends BaseClient {
    constructor(configuration: ClientConfiguration);
    /**
     * Gets device code from device code endpoint, calls back to with device code response, and
     * polls token endpoint to exchange device code for tokens
     * @param request
     */
    acquireToken(request: DeviceCodeRequest): Promise<string>;
    /**
     * Creates device code request and executes http GET
     * @param request
     */
    private getDeviceCode;
    /**
     * Executes POST request to device code endpoint
     * @param deviceCodeEndpoint
     * @param queryString
     * @param headers
     */
    private executePostRequestToDeviceCodeEndpoint;
    /**
     * Create device code endpoint query parameters and returns string
     */
    private createQueryString;
    /**
     * Creates token request with device code response and polls token endpoint at interval set by the device code
     * response
     * @param request
     * @param deviceCodeResponse
     */
    private acquireTokenWithDeviceCode;
    /**
     * Creates query parameters and converts to string.
     * @param request
     * @param deviceCodeResponse
     */
    private createTokenRequestBody;
}