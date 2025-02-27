import { ResolutionType, ErrorsType } from './typings';
export declare const isResolutionValid: (image: HTMLImageElement, resolutionType: ResolutionType, resolutionWidth?: number, resolutionHeight?: number) => boolean;
export declare const isMaxFileSizeValid: (fileSize: any, maxFileSize?: any) => boolean;
export declare const isAcceptTypeValid: (acceptType: any, fileName: any) => boolean;
export declare const isMaxNumberValid: (totalNumber: any, maxNumber: any, keyUpdate: any) => boolean;
export declare const getErrorValidation: ({ fileList, value, maxNumber, keyUpdate, acceptType, maxFileSize, resolutionType, resolutionWidth, resolutionHeight, }: {
    fileList: any;
    value: any;
    maxNumber: any;
    keyUpdate: any;
    acceptType: any;
    maxFileSize: any;
    resolutionType: any;
    resolutionWidth: any;
    resolutionHeight: any;
}) => Promise<ErrorsType>;
